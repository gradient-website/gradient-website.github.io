# Gradient Website

A production-ready Next.js 14 MVP for Gradient, inspired by the provided Figma design.

## Quick start

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

### Start (after build)

```bash
pnpm start
```

### Lint

```bash
pnpm lint
```

### Deploy to Vercel

1. Install the Vercel CLI (`pnpm dlx vercel`).
2. Run `pnpm build` to ensure the project compiles.
3. Execute `pnpm dlx vercel` to create a new Vercel project or link an existing one.
4. Deploy with `pnpm dlx vercel --prod`.

## Assets

Export images or icons from Figma into the `public/` directory. Keep file names descriptive and update component references if you add new imagery.

## Navigation updates

Update navigation labels or destinations inside `components/Navigation.tsx`. Route-to-page mappings used by the layout and pages live in `lib/routes.ts`.
