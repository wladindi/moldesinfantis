"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const categories = [
  "Vestidos",
  "Calças",
  "Bermudas",
  "Saias",
  "Camisetas",
  "Macacão",
  "Pijama",
  "Body",
  "Casacos",
  "Conjuntos",
  "Fantasia",
  "Acessórios",
];

const tiles = Array.from({ length: 16 }, (_, i) => ({
  src: `/gallery/${String(i + 1).padStart(2, "0")}.webp`,
  number: i + 1,
}));

export function GallerySection() {
  return (
    <section id="galeria" className="relative bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            Galeria de abundância
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Uma <span className="gradient-text">coleção completa</span> ao seu alcance.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Mais de 150 modelos diferentes para meninos e meninas, de RN até 12 anos.
            Veja só uma pequena amostra do que está te esperando.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {tiles.map((t, i) => (
            <motion.div
              key={t.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 8) * 0.04 }}
              className="group relative aspect-[3/5] overflow-hidden rounded-2xl border bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={t.src}
                alt={`Molde infantil ${t.number}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 transition-colors group-hover:ring-rose-400/40" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 rounded-full border bg-gradient-to-r from-rose-50 to-amber-50 px-6 py-3 text-center text-sm font-semibold md:text-base"
        >
          <Sparkles className="h-5 w-5 text-rose-500" />
          <span>
            E mais <span className="text-rose-600 font-bold">+134 moldes</span> esperando
            você dentro da biblioteca
          </span>
        </motion.div>
      </div>
    </section>
  );
}
