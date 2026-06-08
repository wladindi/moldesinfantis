"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como recebo os moldes depois da compra?",
    a: "Logo após a confirmação do pagamento, você recebe um e-mail com o acesso à área de membros. Lá dentro estão todos os moldes em PDF, organizados por categoria e idade.",
  },
  {
    q: "Preciso de impressora especial?",
    a: "Não. Todos os moldes são otimizados para impressão em papel A4 comum em qualquer impressora. O guia de impressão (bônus) te mostra o passo a passo para imprimir sem distorção.",
  },
  {
    q: "Funciona se eu sou iniciante?",
    a: "Sim! A biblioteca é pensada para todos os níveis. Os moldes vêm com instruções claras e tabela de medidas. Mesmo quem está começando consegue costurar a primeira peça já no primeiro dia.",
  },
  {
    q: "Posso usar os moldes para vender?",
    a: "Sim. O uso é livre para produção e venda das peças. A única restrição é não redistribuir os arquivos dos moldes.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Você tem 7 dias para testar com calma. Se em qualquer momento desses 7 dias não gostar, é só mandar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia.",
  },
  {
    q: "O acesso é vitalício mesmo?",
    a: "Sim. Pagamento único, acesso para sempre. Você ainda recebe gratuitamente todas as atualizações futuras com novos moldes.",
  },
  {
    q: "Em quais idades os moldes atendem?",
    a: "A biblioteca cobre do RN (recém-nascido) até 12 anos, com tabela de medidas profissional para cada faixa etária.",
  },
  {
    q: "Existe suporte se eu tiver dúvidas?",
    a: "Sim. Você tem suporte por e-mail e acesso ao grupo VIP de costureiras, onde tira dúvidas com a comunidade e com a equipe.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode. No checkout você escolhe pagar à vista no Pix ou parcelar em até 12x no cartão de crédito.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Pix, cartão de crédito (até 12x), boleto bancário e PayPal. O pagamento é processado por uma plataforma 100% segura.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            Perguntas frequentes
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl text-balance">
            Suas <span className="gradient-text">dúvidas</span>, respondidas.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
