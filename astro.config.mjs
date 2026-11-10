// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The public address. Used for share previews (og:image needs a full URL) and canonical links.
  site: 'https://www.gotdoors.net',
  trailingSlash: 'ignore',
});
