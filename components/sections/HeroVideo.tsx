"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

/**
 *  COMO ADICIONAR O VÍDEO:
 *
 *  1. Salve o arquivo em:  public/videos/hero-reels.mp4
 *     (Recomendado: MP4 H.264, formato vertical 9:16, até ~10MB)
 *
 *  2. Opcional — poster (imagem de capa que aparece antes do play):
 *     Salve em:  public/videos/hero-reels-poster.jpg
 *
 *  Os arquivos são detectados automaticamente; se faltarem,
 *  o placeholder de gradient aparece no lugar.
 */
const VIDEO_SRC = "/videos/hero-reels.mp4";
const POSTER_SRC = "/videos/hero-reels-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.volume = 1;
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-400 via-pink-400 to-amber-400 opacity-30 blur-3xl" />

      <div
        onClick={togglePlay}
        className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl shadow-rose-500/30 ring-1 ring-black/5"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          loop
          poster={POSTER_SRC}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setHasVideo(false)}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {!hasVideo && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-amber-200" />
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-700">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow-xl backdrop-blur">
                <Play className="ml-1 h-9 w-9 fill-rose-600 text-rose-600" />
              </div>
              <p className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
                Vídeo em breve
              </p>
            </div>
          </>
        )}

        {hasVideo && !playing && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label="Tocar vídeo"
            className="pointer-events-auto absolute inset-0 z-10 grid place-items-center bg-black/10 transition-colors hover:bg-black/20"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl backdrop-blur transition-transform hover:scale-105">
              <Play className="ml-1 h-9 w-9 fill-rose-600 text-rose-600" />
            </span>
          </button>
        )}

        {playing && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-black/40 backdrop-blur">
              <Pause className="h-7 w-7 text-white" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
