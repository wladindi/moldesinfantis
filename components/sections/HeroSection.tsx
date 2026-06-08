"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Scissors, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/sections/HeroVideo";

const bullets = [
  "150+ moldes prontos para imprimir",
  "Acesso imediato após a compra",
  "Garantia incondicional de 7 dias",
];

const floatingThumbs = [
  { top: "8%", left: "4%", emoji: "👶", delay: 0 },
  { top: "18%", right: "6%", emoji: "🧵", delay: 0.4 },
  { top: "62%", left: "2%", emoji: "🎀", delay: 0.8 },
  { top: "75%", right: "4%", emoji: "✂️", delay: 1.2 },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden gradient-bg pt-10 pb-16 md:pt-20 md:pb-28"
    >
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-rose-200 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-amber-200 blur-3xl" />
      </div>

      {floatingThumbs.map((t, i) => (
        <div
          key={i}
          className="pointer-events-none absolute hidden text-4xl md:block animate-floaty"
          style={{
            top: t.top,
            left: t.left,
            right: t.right,
            animationDelay: `${t.delay}s`,
          }}
        >
          {t.emoji}
        </div>
      ))}

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-rose-700 backdrop-blur-sm shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Edição Premium 2026 • +150 Moldes Profissionais</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Pare de perder horas <br className="hidden md:block" />
          <span className="gradient-text">criando moldes do zero.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-xl"
        >
          Tenha acesso imediato a mais de <strong>150 moldes infantis profissionais</strong>{" "}
          prontos para imprimir, cortar e costurar — em qualquer dispositivo, a qualquer hora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 w-full"
        >
          <HeroVideo />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium"
        >
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-foreground/80">
              <CheckCircle2 className="h-4 w-4 text-rose-500" />
              <span>{b}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <Button
            asChild
            variant="cta"
            size="xl"
            className="group relative overflow-hidden"
          >
            <a href="#oferta">
              <Scissors className="h-5 w-5" />
              QUERO ACESSAR AGORA
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Pagamento 100% seguro • Acesso liberado em segundos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="ml-1 text-sm font-semibold">4,9/5</span>
            <span className="text-sm text-muted-foreground">
              · +2.300 costureiras transformadas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
