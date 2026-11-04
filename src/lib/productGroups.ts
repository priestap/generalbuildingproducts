/**
 * Product categories are organized into these groups, in this order, on both the home page
 * ("What We Supply") and the Products page. Each category picks its group in the CMS.
 * A category with no group (or one not listed here) lands in a final "More products" group.
 *
 * `pitch` is the marketing headline used on the home page; `blurb` is the plain description
 * used on the Products page.
 */
export const groupInfo = [
  {
    name: 'Doors & Frames',
    pitch: 'Built to fit, even when the opening isn’t standard.',
    blurb: 'Hollow metal, wood, and specialty doors, with frames built or modified in our own shop.',
  },
  {
    name: 'Door Hardware',
    pitch: 'Specified right the first time, installed before it ships.',
    blurb: 'Hinges, locks, closers, and exit devices, specified by our hardware consultant and installed before delivery.',
  },
  {
    name: 'Security',
    pitch: 'Know who’s coming through every door.',
    blurb: 'Access control and alarms, with a bonded locksmith on staff to key it and keep it working.',
  },
  {
    name: 'Restrooms & Specialties',
    pitch: 'Finish the whole job with one supplier.',
    blurb: 'Toilet partitions, accessories, lockers, and mailboxes. The rest of the job, from the same supplier.',
  },
];

type Category = { category: string; group?: string; image?: string; brands?: { name: string; url: string }[] };

export function groupProducts<T extends Category>(products: T[]) {
  const known = new Set(groupInfo.map((g) => g.name));
  return [
    ...groupInfo.map((g) => ({ ...g, items: products.filter((p) => p.group === g.name) })),
    { name: 'More products', pitch: '', blurb: '', items: products.filter((p) => !known.has(p.group ?? '')) },
  ].filter((g) => g.items.length > 0);
}
