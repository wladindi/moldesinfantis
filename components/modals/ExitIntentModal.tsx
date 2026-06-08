"use client";

import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    if (fired) return;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        setOpen(true);
        setFired(true);
      }
    };

    const handleScroll = () => {
      const pct =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (pct > 0.55 && !fired) {
        timer = setTimeout(() => {
          if (!fired) {
            setOpen(true);
            setFired(true);
          }
        }, 8000);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [fired]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-lg">
            <Gift className="h-8 w-8" />
          </div>
          <DialogTitle className="font-display text-2xl md:text-3xl text-balance">
            Espera! Não vá embora <span className="gradient-text">de mãos vazias</span>.
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            Use o cupom <strong className="text-rose-600">VOLTA10</strong> e ganhe{" "}
            <strong>10% OFF</strong> no Premium agora. Válido pelos próximos minutos.
          </DialogDescription>
        </DialogHeader>
        <Button asChild variant="cta" size="lg" onClick={() => setOpen(false)}>
          <a href="#oferta">Aproveitar desconto agora</a>
        </Button>
        <button
          onClick={() => setOpen(false)}
          className="mx-auto text-xs text-muted-foreground hover:underline"
        >
          Não, obrigado
        </button>
      </DialogContent>
    </Dialog>
  );
}
