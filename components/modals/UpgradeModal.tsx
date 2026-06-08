"use client";

import { Check, Crown, Sparkles, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { formatBRL } from "@/lib/utils";

const basicFeatures = [
  { text: "30 moldes essenciais", included: true },
  { text: "Tabela de medidas básica", included: true },
  { text: "150+ moldes premium", included: false },
  { text: "8 bônus exclusivos", included: false },
  { text: "Grupo VIP", included: false },
  { text: "Atualizações futuras", included: false },
];

const premiumFeatures = [
  { text: "150+ moldes premium", included: true },
  { text: "8 bônus exclusivos", included: true },
  { text: "Tabela de medidas profissional", included: true },
  { text: "Tabela de precificação", included: true },
  { text: "Grupo VIP de costureiras", included: true },
  { text: "Atualizações futuras grátis", included: true },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAcceptUpgrade: () => void;
  onKeepBasic: () => void;
}

export function UpgradeModal({
  open,
  onOpenChange,
  onAcceptUpgrade,
  onKeepBasic,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          w-[calc(100%-1rem)] max-w-2xl
          gap-3 sm:gap-4
          rounded-2xl sm:rounded-3xl
          p-4 sm:p-6 md:p-8
          max-h-[92dvh] overflow-y-auto
        "
      >
        <DialogHeader className="text-center">
          <div className="mx-auto mb-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 sm:mb-3 sm:px-3 sm:py-1 sm:text-[11px]">
            <Sparkles className="h-3 w-3" /> Oferta válida só agora
          </div>
          <DialogTitle className="text-center font-display text-lg leading-tight sm:text-2xl md:text-3xl text-balance">
            Espera! Por apenas <span className="text-rose-600">+ R$ 12,90</span> você
            leva tudo.
          </DialogTitle>
          <DialogDescription className="text-center text-xs sm:text-sm md:text-base">
            Por que pagar R$ 10 só pelo básico se você pode ter a biblioteca
            completa com bônus por R$ 22,90?
          </DialogDescription>
        </DialogHeader>

        <div className="mt-1 grid gap-3 sm:mt-4 sm:gap-4 md:grid-cols-2">
          <div className="rounded-xl border bg-muted/30 p-3.5 opacity-70 sm:rounded-2xl sm:p-5">
            <div className="flex items-baseline justify-between gap-2 sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Plano Básico
              </p>
              <p className="font-display text-xl font-bold sm:mt-1 sm:text-2xl">
                {formatBRL(10)}
              </p>
            </div>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {basicFeatures.map((f) => (
                <li
                  key={f.text}
                  className="flex items-center gap-2 text-[11px] sm:text-xs"
                >
                  {f.included ? (
                    <Check className="h-3 w-3 shrink-0 text-emerald-500 sm:h-3.5 sm:w-3.5" />
                  ) : (
                    <X className="h-3 w-3 shrink-0 text-rose-400 sm:h-3.5 sm:w-3.5" />
                  )}
                  <span
                    className={
                      f.included
                        ? "leading-snug"
                        : "leading-snug text-muted-foreground line-through"
                    }
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl border-2 border-rose-500 bg-gradient-to-br from-rose-50 to-amber-50 p-3.5 pt-5 shadow-lg shadow-rose-500/20 sm:rounded-2xl sm:p-5 sm:pt-5">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white sm:-top-3 sm:px-3 sm:py-1 sm:text-[10px]">
              <Crown className="mr-1 inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Recomendado
            </div>
            <div className="flex items-baseline justify-between gap-2 sm:block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700 sm:text-xs">
                Plano Premium
              </p>
              <div className="flex items-baseline gap-1.5 sm:mt-1 sm:gap-2">
                <p className="font-display text-xl font-bold text-rose-600 sm:text-2xl">
                  {formatBRL(22.9)}
                </p>
                <p className="text-[10px] text-muted-foreground line-through sm:text-xs">
                  {formatBRL(37.9)}
                </p>
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {premiumFeatures.map((f) => (
                <li
                  key={f.text}
                  className="flex items-center gap-2 text-[11px] font-medium sm:text-xs"
                >
                  <Check className="h-3 w-3 shrink-0 text-emerald-600 sm:h-3.5 sm:w-3.5" />
                  <span className="leading-snug">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-1 flex flex-col gap-2 sm:mt-4">
          <Button
            variant="cta"
            size="lg"
            onClick={onAcceptUpgrade}
            className="h-12 text-sm sm:h-14 sm:text-base"
          >
            Sim! Quero o Premium por {formatBRL(22.9)}
          </Button>
          <button
            onClick={onKeepBasic}
            className="mx-auto max-w-[90%] text-balance text-[11px] leading-snug text-muted-foreground underline-offset-4 hover:underline sm:text-xs"
          >
            Não, prefiro continuar com o básico por R$ 10
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
