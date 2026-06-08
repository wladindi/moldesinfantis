/**
 * Meta (Facebook) Pixel — helpers.
 * O ID é público (renderizado no HTML do cliente), então pode ficar versionado.
 */
export const FB_PIXEL_ID = "827285963542341";

type FbqArgs = (string | object | undefined)[];

declare global {
  interface Window {
    fbq?: (...args: FbqArgs) => void;
  }
}

type CheckoutKey = "basic" | "premium" | "premium_upgrade";

const PLANS: Record<
  CheckoutKey,
  { value: number; content_name: string }
> = {
  basic: { value: 10, content_name: "Plano Basico (R$ 10)" },
  premium: { value: 37.9, content_name: "Plano Premium (R$ 37,90)" },
  premium_upgrade: { value: 22.9, content_name: "Plano Premium Upgrade (R$ 22,90)" },
};

function safeTrack(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

export function fbViewContent() {
  safeTrack("ViewContent", {
    content_name: "Oferta - Biblioteca de Moldes",
    content_category: "Moldes Infantis",
    currency: "BRL",
    value: 37.9,
  });
}

export function fbInitiateCheckout(plan: CheckoutKey) {
  const data = PLANS[plan];
  safeTrack("InitiateCheckout", {
    currency: "BRL",
    value: data.value,
    content_name: data.content_name,
    content_category: "Moldes Infantis",
    content_type: "product",
  });
}
