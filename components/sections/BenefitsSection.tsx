"use client";

import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economia de tempo",
    text: "Acabe com horas desenhando do zero. Imprima, corte e costure em minutos.",
  },
  {
    icon: Sparkles,
    title: "Mais variedade no portfólio",
    text: "150+ modelos diferentes — você nunca mais entrega a mesma peça.",
  },
  {
    icon: TrendingUp,
    title: "Mais vendas, mais ticket",
    text: "Modelos profissionais valorizam suas peças e justificam preços maiores.",
  },
  {
    icon: ShieldCheck,
    title: "Menos erros de corte",
    text: "Tabelas de medidas precisas e moldes testados. Adeus tecido desperdiçado.",
  },
  {
    icon: Zap,
    title: "Mais produtividade",
    text: "Padronize seu processo e produza em escala — atelier ou em casa.",
  },
  {
    icon: GraduationCap,
    title: "Facilidade para iniciantes",
    text: "Passo a passo claro, ideal para quem está começando a costurar.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            O que muda na sua costura
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Tudo que <span className="gradient-text">você precisa</span> para costurar mais, melhor e mais rápido.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-rose-100 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/20">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold leading-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
