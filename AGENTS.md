# Agent Instructions

This is a small Next.js App Router routing playground.

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4 via PostCSS
- ESLint 9 with Next.js config

## Structure

- `src/app/layout.tsx`: root HTML shell, fonts, metadata, global CSS import.
- `src/app/page.tsx`: home page with link to the features hub.
- `src/app/setting-up-nextjs/page.tsx`: setup guide for creating and running a Next.js app.
- `src/app/features/page.tsx`: feature selector page.
- `src/app/features/routing-types/page.tsx`: routing type selector page.
- `src/app/features/component-types/page.tsx`: component type sample page.
- `src/app/features/component-types/component-features-table.tsx`: component comparison table.
- `src/app/features/component-types/server-components/page.tsx`: server component detail page.
- `src/app/features/component-types/server-components/server-component-sample.tsx`: server component sample.
- `src/app/features/component-types/client-components/page.tsx`: client component detail page.
- `src/app/features/component-types/client-components/client-component-sample.tsx`: client component sample.
- `src/app/features/component-types/shared-ui-components/page.tsx`: shared UI detail page.
- `src/app/features/component-types/shared-ui-components/shared-ui-card.tsx`: reusable shared UI sample.
- `src/app/features/routing-types/app-routing/page.tsx`: client-side route menu using `usePathname`.
- `src/app/features/routing-types/page-routing/page.tsx`: basic page routing sample.
- `src/app/globals.css`: global styles.
- `public/`: static assets.

## Routes

- `/features`: feature selector page
- `/setting-up-nextjs`: setup guide for creating and running a Next.js app
- `/features/routing-types`: routing type selector page
- `/features/component-types`: component type sample page
- `/features/component-types/server-components`: server component detail page
- `/features/component-types/client-components`: client component detail page
- `/features/component-types/shared-ui-components`: shared UI component detail page
- `/features/routing-types/page-routing`: page routing sample
- `/features/routing-types/app-routing`: route playground menu
- `/features/routing-types/app-routing/about`: single route sample
- `/features/routing-types/app-routing/contact`: single route sample
- `/features/routing-types/app-routing/dashboard`: nested route sample
- `/features/routing-types/app-routing/dashboard/analytics`: nested route sample
- `/features/routing-types/app-routing/blog`: blog route index sample
- `/features/routing-types/app-routing/blog/[slug]`: dynamic route with `generateStaticParams`
- `/features/routing-types/app-routing/users/[userId]`: dynamic route with `generateStaticParams`
- `/features/routing-types/app-routing/users/[userId]/posts/[postId]`: nested dynamic route with `generateStaticParams`
- `/features/routing-types/app-routing/docs/[...slug]`: required catch-all route with `generateStaticParams`
- `/features/routing-types/app-routing/help/[[...slug]]`: optional catch-all route with `generateStaticParams`

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
