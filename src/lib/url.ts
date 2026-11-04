/** Make sure a link edited in the CMS is a usable absolute URL ("www.x.com" -> "https://www.x.com"). */
export function normalizeUrl(raw: string): string {
  const url = (raw ?? '').trim();
  if (!url) return '#';
  return /^https?:\/\//i.test(url) ? url : `https://${url.replace(/^\/+/, '')}`;
}

/** Turn "215 Burbank" etc. into a Google Maps search link. */
export function mapsUrl(...parts: string[]): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(', '))}`;
}

/** "419-531-4494" -> "tel:+14195314494" */
export function telUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:+${digits.length === 10 ? '1' + digits : digits}`;
}
