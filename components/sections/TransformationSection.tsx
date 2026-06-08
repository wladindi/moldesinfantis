"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";

const before = [
  "Horas perdidas desenhando moldes do zero",
  "Pinterest, blogs e arquivos desorganizados",
  "Tecido desperdiçado por erro de medida",
  "Sempre as mesmas peças no portfólio",
  "Dificuldade de cobrar mais caro",
];

const after = [
  "150+ moldes prontos em segundos",
  "Tudo organizado por categoria e idade",
  "Tabela de medidas precisa para cada peça",
  "Variedade infinita pra surpreender clientes",
  "Ticket médio maior, mais renda no fim do mês",
];

export function TransformationSection() {
  return (
    <section id="transformacao" className="relative bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            Antes & Depois
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            A <span className="gradient-text">transformação</span> que acontece em poucos dias.
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border bg-rose-50/40 p-7"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-rose-700">
              Antes
            </p>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-200 text-rose-700">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden items-center md:flex">
            <div className="rounded-full bg-gradient-to-br from-rose-500 to-amber-500 p-3 text-white shadow-xl shadow-rose-500/30">
              <ArrowRight className="h-6 w-6" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-emerald-300 bg-emerald-50/40 p-7 shadow-lg"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-700">
              Depois
            </p>
            <ul className="space-y-3">
              {after.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-200 text-emerald-700">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
