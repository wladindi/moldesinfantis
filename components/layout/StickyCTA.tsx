"use client";

import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBRL } from "@/lib/utils";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
      setVisible(scrolled > 600);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-40 h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Biblioteca Premium
            </p>
            <p className="text-base font-bold leading-tight">
              {formatBRL(37.9)}{" "}
              <span className="text-xs font-normal text-muted-foreground line-through">
                {formatBRL(297)}
              </span>
            </p>
          </div>
          <Button asChild variant="cta" size="default" className="shrink-0">
            <a href="#oferta">
              <Scissors className="h-4 w-4" />
              Comprar
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
