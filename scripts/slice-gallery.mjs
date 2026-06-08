import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

const SRC = path.resolve("public/gallery/source.png");
const OUT_DIR = path.resolve("public/gallery");
const COLS = 8;
const ROWS = 2;

const img = sharp(SRC);
const meta = await img.metadata();
const { width, height } = meta;
if (!width || !height) throw new Error("Could not read image dimensions");

const tileW = Math.floor(width / COLS);
const tileH = Math.floor(height / ROWS);

console.log(`Source: ${width}x${height}`);
console.log(`Tile size: ${tileW}x${tileH}`);
console.log(`Slicing into ${COLS}x${ROWS} = ${COLS * ROWS} tiles...`);

let idx = 1;
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const left = col * tileW;
    const top = row * tileH;
    const filename = String(idx).padStart(2, "0") + ".webp";
    const out = path.join(OUT_DIR, filename);
    await sharp(SRC)
      .extract({ left, top, width: tileW, height: tileH })
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(out);
    console.log(`  ${filename}  (${left},${top})`);
    idx++;
  }
}

console.log("Done.");
