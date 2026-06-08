"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, Lock, ShieldCheck, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpgradeModal } from "@/components/modals/UpgradeModal";
import { formatBRL } from "@/lib/utils";

const PREMIUM_URL = "https://pay.kiwify.com.br/igrpTHe";
const PREMIUM_UPGRADE_URL = "https://pay.kiwify.com.br/iPtGXI5";
const BASIC_URL = "https://pay.kiwify.com.br/C5DESPB";

const basic = [
  { text: "30 moldes essenciais", on: true },
  { text: "Tabela de medidas básica", on: true },
  { text: "150+ moldes premium", on: false },
  { text: "8 bônus exclusivos", on: false },
  { text: "Grupo VIP de costureiras", on: false },
  { text: "Atualizações futuras", on: false },
];

const premium = [
  "150+ moldes infantis profissionais",
  "+50 moldes de pijama (bônus)",
  "Tabela de medidas profissional",
  "Tabela de precificação",
  "Grupo VIP de costureiras",
  "Atualizações futuras grátis",
  "Guia de impressão perfeita",
  "Checklist de produção",
  "Catálogo de inspirações 2026",
  "Acesso vitalício",
];

export function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleAcceptUpgrade = () => {
    setModalOpen(false);
    window.location.href = PREMIUM_UPGRADE_URL;
  };

  const handleKeepBasic = () => {
    setModalOpen(false);
    window.location.href = BASIC_URL;
  };

  return (
    <section
      id="oferta"
      className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white py-16 md:py-28"
    >
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            <Sparkles className="h-3.5 w-3.5" /> Oferta especial de lançamento
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Escolha seu acesso à biblioteca.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Comece hoje. Pagamento único. Sem mensalidade. Sem pegadinha.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 md:mt-16 md:grid-cols-[1fr_1.1fr] md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border bg-white p-5 shadow-sm sm:p-7"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Plano Básico
            </p>
            <h3 className="font-display mt-1 text-xl font-bold sm:text-2xl">
              Começo essencial
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Para quem quer só uma amostra.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold sm:text-5xl">
                {formatBRL(10)}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">pagamento único</span>
            </div>

            <ul className="mt-6 space-y-3">
              {basic.map((f) => (
                <li key={f.text} className="flex items-start gap-2 text-sm">
                  {f.on ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
                  )}
                  <span className={f.on ? "" : "text-muted-foreground line-through"}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleBasicClick}
              variant="outline"
              size="lg"
              className="mt-7 w-full"
            >
              Quero o plano básico
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative mt-4 md:mt-0 md:-translate-y-3 md:scale-[1.02]"
          >
            <div className="pointer-events-none absolute -inset-3 -z-10 animate-glow-pulse rounded-[2.5rem] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-500 opacity-50 blur-2xl sm:-inset-5 md:-inset-6 md:opacity-60" />

            <div className="pointer-events-none absolute -inset-[2px] -z-[5] overflow-hidden rounded-[1.6rem]">
              <div className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 animate-border-spin bg-[conic-gradient(from_0deg,#f43f6f,#f59e0b,#f43f6f,#ec4899,#f43f6f)]" />
            </div>

            <div className="relative rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50 px-5 pb-6 pt-8 shadow-2xl shadow-rose-500/30 sm:px-7 sm:pb-7 sm:pt-9 md:px-8 md:pt-10">
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-y-0 -left-1/3 w-1/3 animate-ribbon-shine bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              </div>

              <div className="absolute -top-3 left-1/2 z-20 animate-badge-wiggle sm:-top-4">
                <div className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-rose-500/40 sm:px-4 sm:py-1.5 sm:text-xs">
                  <span className="absolute inset-0 rounded-full bg-rose-500 opacity-60 blur-md" />
                  <Crown className="relative h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="relative">Mais escolhido</span>
                </div>
              </div>

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-wider text-rose-700 sm:text-xs">
                  Plano Premium
                </p>
                <h3 className="font-display mt-1 text-xl font-bold sm:text-2xl md:text-[26px]">
                  Biblioteca completa + bônus
                </h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  Tudo que você precisa para escalar.
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-2 sm:mt-6">
                  <span className="text-xs text-muted-foreground line-through sm:text-sm">
                    {formatBRL(297)}
                  </span>
                  <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    -87% OFF
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-display animate-price-bounce inline-block bg-gradient-to-br from-rose-600 via-rose-500 to-amber-500 bg-clip-text px-1 py-1 text-[44px] font-black leading-[1.15] text-transparent drop-shadow-sm sm:text-5xl md:text-6xl lg:text-[64px]">
                    {formatBRL(37.9)}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">pagamento único</span>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">
                  ou 12x de {formatBRL(3.79)} no cartão
                </p>

                <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {premium.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs font-medium sm:text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="cta" size="xl" className="mt-6 w-full text-sm sm:mt-7 sm:text-base">
                  <a href={PREMIUM_URL}>QUERO ACESSAR AGORA</a>
                </Button>

                <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground sm:gap-x-4 sm:text-[11px]">
                  <span className="inline-flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Compra 100% segura
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Garantia de 7 dias
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <UpgradeModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onAcceptUpgrade={handleAcceptUpgrade}
        onKeepBasic={handleKeepBasic}
      />
    </section>
  );
}
