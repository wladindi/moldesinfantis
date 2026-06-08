"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section id="garantia" className="relative bg-secondary py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border bg-white p-8 shadow-xl md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50" />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="mx-auto">
              <div className="relative grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-2xl shadow-emerald-500/40 md:h-44 md:w-44">
                <ShieldCheck className="h-16 w-16 md:h-20 md:w-20" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  7 dias
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Garantia incondicional
              </span>
              <h2 className="font-display mt-3 text-2xl font-bold md:text-4xl text-balance">
                Risco zero: <span className="text-emerald-600">7 dias para testar</span>.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Acesse a biblioteca, baixe os moldes, imprima e teste. Se em 7 dias você
                achar que não vale cada centavo, é só me mandar uma mensagem e devolvo{" "}
                <strong>100% do seu investimento</strong>. Sem perguntas, sem burocracia.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Todo o risco é meu. Você só ganha.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
