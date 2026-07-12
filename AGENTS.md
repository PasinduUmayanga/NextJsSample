# Agent Instructions

This is a small Next.js App Router routing playground.

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4 via PostCSS
- ESLint 9 with Next.js config

## Structure

- `src/app/layout.tsx`: root HTML shell, fonts, metadata, global CSS import.
- `src/app/page.tsx`: home page with link to routing examples.
- `src/app/features/routingtypes/page.tsx`: routing type selector page.
- `src/app/features/app-routing/page.tsx`: client-side route menu using `usePathname`.
- `src/app/features/page-routing/page.tsx`: basic page routing sample.
- `src/app/globals.css`: global styles.
- `public/`: static assets.

## Routes

- `/about`: `src/app/about/page.tsx`
- `/contact`: `src/app/contact/page.tsx`
- `/features/routingtypes`: routing type selector page
- `/features/page-routing`: page routing sample
- `/features/app-routing`: route playground menu
- `/dashboard`: `src/app/dashboard/page.tsx`
- `/dashboard/analytics`: `src/app/dashboard/analytics/page.tsx`
- `/blog`: `src/app/blog/page.tsx`
- `/blog/[slug]`: dynamic route with `generateStaticParams`
- `/users/[userId]`: dynamic route with `generateStaticParams`
- `/users/[userId]/posts/[postId]`: nested dynamic route with `generateStaticParams`
- `/docs/[...slug]`: required catch-all route with `generateStaticParams`
- `/help/[[...slug]]`: optional catch-all route with `generateStaticParams`

## Conventions

- Add routes under `src/app` using App Router folder conventions.
- Use `layout.tsx` only for shared route structure.
- Keep route params typed in page props.
- Add `generateStaticParams` for static dynamic-route examples.
- Prefer simple server components unless client hooks or browser APIs are needed.
- Move repeated UI into shared components only after duplication appears.

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
