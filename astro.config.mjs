// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The public address. Used for share previews (og:image needs a full URL) and canonical links.
  // TODO: change to the real domain (e.g. 'https://www.gotdoors.net') once it points at Cloudflare.
  site: 'https://generalbuildingproducts.pages.dev',
  trailingSlash: 'ignore',
});
