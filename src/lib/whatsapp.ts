// lib/whatsapp.ts

import { CartItem } from "@/components/shop/types";

export function generateWhatsAppMessage(cart: CartItem[], total: number): string {
  let message = `¡Hola! 👋 Me gustaría hacer un pedido del merchandising de la Buildathon:\n\n`;
  
  cart.forEach(item => {
    const itemTotal = (item.currentPrice).toFixed(2);
    message += `*•  ${item.name} ( ${item.selectedFeature})* - $${itemTotal}\n`;
  });

  message += `\n*Total a pagar: ${total.toFixed(2)} Bs.*`;
  
  return encodeURIComponent(message);
}