import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white pt-12 pb-24 md:pb-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-lg">
                <Scissors className="h-4 w-4" />
              </div>
              <span className="font-display text-lg font-bold">
                Biblioteca Premium
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A biblioteca completa de moldes infantis para costureiras que querem
              economizar tempo, vender mais e crescer no atelier.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navegação
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#galeria" className="hover:text-rose-600">
                  Galeria de moldes
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-rose-600">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-rose-600">
                  Bônus
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-rose-600">
                  Comprar agora
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-600">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Suporte
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>contato@bibliotecamoldes.com.br</li>
              <li>WhatsApp: (00) 00000-0000</li>
              <li>Atendimento seg–sex, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Biblioteca Premium de Moldes Infantis. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-600">Termos de uso</a>
            <a href="#" className="hover:text-rose-600">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
