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
      <DialogContent className="max-w-2xl">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700">
            <Sparkles className="h-3 w-3" /> Oferta válida só agora
          </div>
          <DialogTitle className="text-center font-display text-2xl leading-tight md:text-3xl text-balance">
            Espera! Por apenas <span className="text-rose-600">+ R$ 12,90</span> você
            leva tudo.
          </DialogTitle>
          <DialogDescription className="text-center text-sm md:text-base">
            Por que pagar R$ 10 só pelo básico se você pode ter a biblioteca completa
            com bônus por R$ 22,90?
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-muted/30 p-5 opacity-70">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Plano Básico
            </p>
            <p className="mt-1 font-display text-2xl font-bold">
              {formatBRL(10)}
            </p>
            <ul className="mt-4 space-y-2">
              {basicFeatures.map((f) => (
                <li
                  key={f.text}
                  className="flex items-center gap-2 text-xs"
                >
                  {f.included ? (
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <X className="h-3.5 w-3.5 text-rose-400" />
                  )}
                  <span
                    className={
                      f.included ? "" : "text-muted-foreground line-through"
                    }
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border-2 border-rose-500 bg-gradient-to-br from-rose-50 to-amber-50 p-5 shadow-lg shadow-rose-500/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              <Crown className="mr-1 inline h-3 w-3" />
              Recomendado
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Plano Premium
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="font-display text-2xl font-bold text-rose-600">
                {formatBRL(22.9)}
              </p>
              <p className="text-xs text-muted-foreground line-through">
                {formatBRL(37.9)}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {premiumFeatures.map((f) => (
                <li
                  key={f.text}
                  className="flex items-center gap-2 text-xs font-medium"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Button variant="cta" size="lg" onClick={onAcceptUpgrade}>
            Sim! Quero o Premium por {formatBRL(22.9)}
          </Button>
          <button
            onClick={onKeepBasic}
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Não, prefiro pagar mais caro depois e levar só o básico por R$ 10
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
