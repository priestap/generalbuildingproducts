/** "Specialty Door Controls & Power Operators" -> "specialty-door-controls-power-operators" */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Brand names for display in a strip: drop "(Lockers)"-style notes and product-line suffixes, de-duplicate. */
export function uniqueBrandNames(categories: { brands?: { name: string }[] }[]): string[] {
  const seen = new Map<string, string>();
  for (const c of categories) {
    for (const b of c.brands ?? []) {
      const name = b.name.replace(/\s*\(.*?\)\s*/g, '').replace(/\s+Access 800$/i, '').trim();
      if (name && !seen.has(name.toLowerCase())) seen.set(name.toLowerCase(), name);
    }
  }
  return [...seen.values()];
}
