import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs/promises";
import ffmpegPath from "ffmpeg-static";
import ffprobeStatic from "ffprobe-static";

const ffprobePath = ffprobeStatic.path;

const VIDEOS_DIR = path.resolve("public/videos");
const OUT = path.join(VIDEOS_DIR, "hero-reels.mp4");
const POSTER = path.join(VIDEOS_DIR, "hero-reels-poster.jpg");

const files = await fs.readdir(VIDEOS_DIR);
const source = files
  .map((f) => path.join(VIDEOS_DIR, f))
  .find(
    (p) =>
      /\.(mov|mp4|webm|mkv|m4v|avi)$/i.test(p) &&
      path.basename(p).toLowerCase() !== "hero-reels.mp4"
  );

if (!source) {
  console.error("No source video found in public/videos/");
  process.exit(1);
}

console.log(`Source: ${path.basename(source)}`);

function run(bin, args) {
  return new Promise((resolve, reject) => {
    const p = spawn(bin, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    p.stderr.on("data", (d) => {
      stderr += d.toString();
    });
    let stdout = "";
    p.stdout.on("data", (d) => {
      stdout += d.toString();
    });
    p.on("error", reject);
    p.on("close", (code) =>
      code === 0 ? resolve({ stdout, stderr }) : reject(new Error(stderr || `exit ${code}`))
    );
  });
}

const { stdout: probeOut } = await run(ffprobePath, [
  "-v",
  "error",
  "-print_format",
  "json",
  "-show_streams",
  "-show_format",
  source,
]);
const probe = JSON.parse(probeOut);
const video = probe.streams.find((s) => s.codec_type === "video");
const duration = parseFloat(probe.format.duration);
const srcSize = (await fs.stat(source)).size;
console.log(
  `Resolution: ${video.width}x${video.height} · Duration: ${duration.toFixed(
    2
  )}s · Source size: ${(srcSize / 1024 / 1024).toFixed(2)} MB`
);

const isVertical = video.height >= video.width;
const targetLong = 1280;
const scaleFilter = isVertical
  ? `scale=-2:'min(${targetLong},ih)'`
  : `scale='min(${targetLong},iw)':-2`;

console.log("\n--- Pass 1/2: H.264 CRF 26, preset slow, faststart ---");
await run(ffmpegPath, [
  "-y",
  "-i",
  source,
  "-vf",
  scaleFilter,
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  "26",
  "-pix_fmt",
  "yuv420p",
  "-profile:v",
  "high",
  "-level",
  "4.0",
  "-movflags",
  "+faststart",
  "-c:a",
  "aac",
  "-b:a",
  "96k",
  "-ac",
  "2",
  OUT,
]);

const outSize = (await fs.stat(OUT)).size;
console.log(
  `\nResult:  ${(outSize / 1024 / 1024).toFixed(2)} MB  (was ${(srcSize / 1024 / 1024).toFixed(2)} MB)`
);
console.log(`Saved to ${path.relative(process.cwd(), OUT)}`);

console.log("\n--- Generating poster from frame at 1s ---");
try {
  await run(ffmpegPath, [
    "-y",
    "-ss",
    "1",
    "-i",
    OUT,
    "-frames:v",
    "1",
    "-q:v",
    "4",
    POSTER,
  ]);
  console.log(`Poster: ${path.relative(process.cwd(), POSTER)}`);
} catch (e) {
  console.warn("Could not generate poster (not critical):", e.message);
}
