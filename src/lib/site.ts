/**
 * Single source of truth for clinic contact details.
 * عيادة Selina Derma — كركوك، العراق.
 */

// Digits only, international format, no "+" — used to build wa.me links.
export const WHATSAPP_NUMBER = "9647723155444";
export const PHONE_DISPLAY = "+964 772 315 5444";
export const PHONE_TEL = "+9647723155444";

export const SITE_URL = "https://selinaderma.com";

export const INSTAGRAM_HANDLE = "dr.zahra_mohammed_";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const ADDRESS = {
  street: "شارع القدس، عمارة المهندس حسن، مقابل قرية الهدايا",
  city: "كركوك",
  country: "العراق",
  countryCode: "IQ",
};

/** Full address on one line (for display). */
export const ADDRESS_LINE = `${ADDRESS.street}، ${ADDRESS.city}، ${ADDRESS.country}`;

// Google Maps embed for Kirkuk, Iraq. Replace `q` with the exact pin when available.
export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Kirkuk+Iraq&output=embed";

export const SOCIAL = {
  instagram: INSTAGRAM_URL,
};

/** Build a WhatsApp deep-link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
