"use client";

import { motion } from "framer-motion";
import { Clock, Frown, Search, XCircle } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Horas perdidas desenhando do zero",
    text: "Você abre o caderno, mede, corrige, refaz — e o dia acabou sem produzir uma peça sequer.",
  },
  {
    icon: Search,
    title: "Procurando moldes espalhados pela internet",
    text: "Aquele molde de blog antigo, com tamanho errado e arquivo ruim que nunca encaixa direito.",
  },
  {
    icon: XCircle,
    title: "Erros caros de tecido e tempo",
    text: "Cortou errado de novo? Um molde mal feito vira tecido desperdiçado e cliente frustrada.",
  },
  {
    icon: Frown,
    title: "Pouca variedade no seu portfólio",
    text: "Sempre as mesmas peças. Difícil cobrar mais, difícil atrair novas clientes.",
  },
];

export function ProblemSection() {
  return (
    <section id="dor" className="relative bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700"
          >
            Se você se identifica, isso aqui é pra você
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance"
          >
            Costurar deveria gerar renda, <br className="hidden md:block" />
            não <span className="text-rose-600">esgotamento</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base text-muted-foreground md:text-lg"
          >
            A maioria das costureiras perde até 70% do tempo procurando, ajustando ou
            criando moldes — em vez de costurar, vender e crescer.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition-colors group-hover:bg-rose-600 group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-8 text-center"
        >
          <p className="text-lg font-semibold md:text-xl text-balance">
            E se você pudesse abrir um único lugar e encontrar <em className="not-italic text-rose-600 font-bold">todos</em> os moldes
            infantis que precisa — prontos pra imprimir e usar hoje?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
