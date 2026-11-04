# General Building Products website

Static site built with [Astro](https://astro.build), hosted on [Cloudflare Pages](https://pages.cloudflare.com), with content editing through [Pages CMS](https://pagescms.org).

**Non-developers:** see [EDITING-GUIDE.md](EDITING-GUIDE.md) instead.

## How it fits together

```
Client edits in Pages CMS ──► commit to GitHub repo ──► Cloudflare Pages builds ──► live in ~1 min
Developer edits locally   ──► git push ─────────────────┘
```

- If a build fails, Cloudflare keeps serving the last good version. The site does not go down.
- Contact form messages go through [Web3Forms](https://web3forms.com) to the inbox tied to the access key in `src/config.ts`.

## Where things live

| What | File |
| --- | --- |
| Product categories and brand links | `src/data/products.json` |
| Staff | `src/data/staff.json` |
| Testimonials | `src/data/testimonials.json` |
| Home page banner and services | `src/data/home.json` |
| About text | `src/data/about.json` |
| Phone, email, address | `src/data/site.json` |
| CMS editing forms | `.pages.yml` |
| Images the CMS can change | `public/images/` |
| Fixed images (hero, about, history photos) | `src/assets/` (Astro optimizes these to WebP) |
| Styles | `src/styles/global.css` |
| Contact form key | `src/config.ts` |
| Original WordPress media (archive, not used by the build) | `source-images/` |

The parallax on the hero and testimonials uses `background-attachment: fixed` at 768px and wider, the same technique as the old theme. Phones get a static background, since iOS Safari ignores `fixed`.

## Local development

Requires Node 22+.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve dist/ locally
```

## One-time setup

All accounts belong to the client (use a company address such as sales@gotdoors.net). Add the developer as a member, not as the owner.

1. **GitHub:** create a repo under the client's GitHub account or organization and push this project. Add the developer as a collaborator.
2. **Cloudflare Pages:** in the client's Cloudflare account, go to Workers & Pages → Create → Pages → Connect to Git and pick the repo.
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`

   Add the custom domain under the project's Custom domains tab. Then set `site` in `astro.config.mjs` to that domain.
3. **Web3Forms:** create an access key at web3forms.com with the inbox that should receive messages, and paste it into `src/config.ts`.
4. **Pages CMS:** sign in at https://app.pagescms.org with GitHub, install the Pages CMS GitHub App on the repo, and open the repo. It reads `.pages.yml` automatically. Under Collaborators, invite each client editor by email. They don't need GitHub accounts.
5. **Keep the logins safe:** store them (GitHub, Cloudflare, domain registrar, Web3Forms) in the client's password manager.

## If you're a developer taking this over

This is a standard Astro static site. There's no database, server code or WordPress. Ask the client to add you to the GitHub repo and the Cloudflare account. Content is in `src/data/*.json`, and anything you add there can be made editable by adding fields to `.pages.yml` ([docs](https://pagescms.org/docs/configuration/)).
