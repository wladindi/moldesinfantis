"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBRL } from "@/lib/utils";

const highlights = [
  "150+ moldes profissionais",
  "8 bônus exclusivos",
  "Acesso vitalício",
  "Garantia de 7 dias",
];

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 py-20 text-white md:py-28">
      <div className="absolute inset-0 -z-0 opacity-20">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-amber-200 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container relative z-10 text-center"
      >
        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
          Última chance
        </span>
        <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl lg:text-6xl text-balance">
          Sua nova fase de costureira começa hoje.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-xl">
          Imprima o primeiro molde em minutos. Pagamento único. Garantia incondicional.
        </p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-amber-200" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 inline-block rounded-3xl bg-white p-6 text-foreground shadow-2xl md:p-8">
          <p className="text-xs text-muted-foreground line-through">
            De {formatBRL(297)}
          </p>
          <p className="font-display text-4xl font-bold text-rose-600 md:text-6xl">
            {formatBRL(37.9)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ou 12x de {formatBRL(3.79)}
          </p>
          <Button asChild variant="cta" size="xl" className="mt-5 w-full">
            <a href="#oferta">
              <Scissors className="h-5 w-5" />
              QUERO ACESSAR AGORA
            </a>
          </Button>
          <p className="mt-3 text-[11px] text-muted-foreground">
            🔒 Compra segura · 🛡️ Garantia 7 dias
          </p>
        </div>
      </motion.div>
    </section>
  );
}
