# Nexify Concepts

Agency website built with Next.js 15.5.18, React, TypeScript, and Tailwind CSS 4.

## Development

```sh
npm ci
npm run dev
```

For a production check:

```sh
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1
```

## Design and content

The active routes use `src/components/premium/Studio.tsx` and `ContactBrief.tsx`, with shared navigation in `src/components/layout` and styles in `src/app/globals.css`.

- The supplied logo is preserved in `public/nexify-brand.png`; the navigation crops the mark with CSS.
- Geist is self-hosted from `public/fonts` with its SIL Open Font License.
- Product visuals are explicitly labeled illustrative concepts, not completed client projects. The sample figures inside them are decorative mock interface data.
- The previous unverified testimonials are no longer presented publicly; `/testimonials` redirects to `/about`.
- The contact brief opens the visitor’s email client or WhatsApp with a prefilled message. Visitors must send it themselves. No email delivery provider, database, or secret is required. `/api/contact` returns 503 rather than falsely confirming delivery.
- Existing contact details in `src/lib/constants.ts` are preserved. Replace only with verified business details.

## Deployment

The repository is linked to Vercel. Use a feature branch/PR for a preview before merging to `main`. Set `NEXT_PUBLIC_SITE_URL` to the canonical public origin (currently `https://www.nexifyconcepts.store`). Fonts do not require a build-time Google Fonts request.

Vercel project scope: `mushaf-s-projects`, project: `nexify-concepts`. The connected Vercel account must be authorized for that scope to inspect logs and project settings.

The website build was verified with `npm ci`, `npm run build`, and `npm run lint`. Browser verification results and any environment limitations are recorded in the pull request.
