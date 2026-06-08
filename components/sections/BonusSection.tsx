"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Ruler,
  Calculator,
  Users,
  RefreshCw,
  Printer,
  ListChecks,
  BookOpen,
} from "lucide-react";
import { formatBRL } from "@/lib/utils";

const bonuses = [
  {
    icon: Gift,
    title: "+50 Moldes de Pijama Infantil",
    text: "Coleção completa de pijamas para todas as estações.",
    value: 67,
  },
  {
    icon: Ruler,
    title: "Tabela de Medidas Profissional",
    text: "Do RN ao 12 anos. Nunca mais erre uma medida.",
    value: 47,
  },
  {
    icon: Calculator,
    title: "Tabela de Precificação",
    text: "Cobre o preço certo e pare de trabalhar de graça.",
    value: 97,
  },
  {
    icon: Users,
    title: "Acesso ao Grupo VIP de Costureiras",
    text: "Comunidade ativa para tirar dúvidas e trocar ideias.",
    value: 197,
  },
  {
    icon: RefreshCw,
    title: "Atualizações Futuras Inclusas",
    text: "Novos moldes adicionados todo mês — sem pagar nada.",
    value: 297,
  },
  {
    icon: Printer,
    title: "Guia de Impressão Perfeita",
    text: "Imprima qualquer molde em A4 sem distorção.",
    value: 37,
  },
  {
    icon: ListChecks,
    title: "Checklist de Produção Diária",
    text: "Organize seu atelier e produza 3x mais rápido.",
    value: 27,
  },
  {
    icon: BookOpen,
    title: "Catálogo de Inspirações 2026",
    text: "Tendências e modelos para nunca ficar sem ideia.",
    value: 37,
  },
];

export function BonusSection() {
  const total = bonuses.reduce((s, b) => s + b.value, 0);

  return (
    <section
      id="bonus"
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 py-16 md:py-24"
    >
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-950">
            <Gift className="h-3.5 w-3.5" /> 8 Bônus exclusivos
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Você ainda leva <span className="gradient-text">8 bônus</span> avaliados em mais de {formatBRL(total)}.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Tudo isso já incluso no acesso à Biblioteca Premium — sem custo adicional.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                Bônus #{i + 1}
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-rose-400 text-white shadow-lg shadow-amber-500/30">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold leading-snug">{b.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {b.text}
              </p>
              <div className="mt-4 flex items-baseline gap-2 border-t pt-3">
                <span className="text-xs text-muted-foreground line-through">
                  {formatBRL(b.value)}
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  GRÁTIS
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl rounded-3xl border-2 border-dashed border-rose-300 bg-white p-7 text-center"
        >
          <p className="text-sm text-muted-foreground">Valor real de tudo isso:</p>
          <p className="mt-1 font-display text-3xl font-bold text-rose-600 md:text-4xl">
            {formatBRL(total + 397)}
          </p>
          <p className="mt-3 text-sm">
            Hoje, você leva tudo por apenas{" "}
            <span className="text-2xl font-bold text-emerald-600">
              {formatBRL(37.9)}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
