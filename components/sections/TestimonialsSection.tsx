"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BadgeCheck, ImageIcon } from "lucide-react";

/**
 *  COMO ADICIONAR SUAS IMAGENS:
 *
 *  1. Coloque os arquivos em:  public/testimonials/
 *     Ex: public/testimonials/01.jpg, 02.jpg, 03.png, etc.
 *
 *  2. Tamanhos recomendados:  largura entre 600px e 1000px.
 *     Aceita .jpg, .png, .webp. Use proporções variadas (quadrado, retrato,
 *     paisagem) — o layout masonry se ajusta sozinho.
 *
 *  3. Para mudar a quantidade ou ordem, edite a lista abaixo.
 *     Se a imagem ainda não existir, aparece um placeholder bonito no lugar.
 */
const proofs = [
  { src: "/testimonials/01.png", alt: "Depoimento de cliente satisfeita", caption: "Juliana · Belo Horizonte, MG", ratio: "3/4", tone: "from-rose-200 to-rose-400" },
  { src: "/testimonials/02.png", alt: "Depoimento de cliente satisfeita", caption: "Patrícia · São Paulo, SP", ratio: "1/1", tone: "from-amber-200 to-amber-400" },
  { src: "/testimonials/03.png", alt: "Depoimento de cliente satisfeita", caption: "Renata · Curitiba, PR", ratio: "3/4", tone: "from-pink-200 to-pink-400" },
  { src: "/testimonials/04.png", alt: "Depoimento de cliente satisfeita", caption: "Camila · Recife, PE", ratio: "4/5", tone: "from-violet-200 to-violet-400" },
];

interface Proof {
  src: string;
  alt: string;
  caption: string;
  ratio: string;
  tone: string;
}

function ProofCard({ p, delay }: { p: Proof; delay: number }) {
  const [errored, setErrored] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: errored ? p.ratio : undefined }}
      >
        {errored ? (
          <div
            className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${p.tone}`}
          >
            <div className="flex flex-col items-center gap-2 text-white/90">
              <ImageIcon className="h-8 w-8" />
              <span className="rounded-full bg-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                Sua foto aqui
              </span>
              <span className="px-4 text-center text-[11px] font-medium drop-shadow">
                {p.src.replace("/testimonials/", "")}
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={p.src}
            alt={p.alt}
            width={800}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full object-cover"
            onError={() => setErrored(true)}
          />
        )}
        <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold text-emerald-700 shadow-sm backdrop-blur">
          <BadgeCheck className="h-3 w-3 text-emerald-600" />
          Verificado
        </div>
      </div>
      <figcaption className="border-t bg-white px-4 py-3 text-xs">
        <p className="font-semibold">{p.caption}</p>
        <p className="text-muted-foreground">Compra verificada</p>
      </figcaption>
    </motion.figure>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            +2.300 alunas transformadas
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Provas <span className="gradient-text">reais</span> de quem virou o jogo.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-base font-semibold">4,9 de 5</span>
            <span className="text-sm text-muted-foreground">
              · em 2.300+ avaliações
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {proofs.map((p, i) => (
            <ProofCard key={p.src} p={p} delay={(i % 6) * 0.06} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          São apenas algumas — temos centenas de prints, vídeos e fotos no grupo VIP.
        </p>
      </div>
    </section>
  );
}
