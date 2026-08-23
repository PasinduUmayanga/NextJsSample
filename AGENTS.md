# Agent Instructions

This is a small Next.js App Router routing playground.

## Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4 via PostCSS
- ESLint 9 with Next.js config

## Structure

- `src/app/layout.tsx`: root HTML shell, fonts, metadata, global CSS import.
- `src/app/_components/app-nav.tsx`: shared sticky top navigation bar.
- `src/app/_components/app-nav.module.css`: styles for the top nav and breadcrumb chevrons.
- `src/app/_components/code-block.tsx`: shared IDE-like code block and syntax color styling.
- `src/app/_components/code-block.module.css`: styles for shared code block layout.
- `src/app/not-found.tsx`: custom 404 page for unmatched routes.
- `public/app-logo.png`: application logo used by navbar and home page.
- `src/app/icon.png`: browser tab/title bar icon generated from the application logo.
- `src/app/apple-icon.png`: Apple touch icon generated from the application logo.
- `src/app/about/page.tsx`: about page for the learning app.
- `src/app/page.tsx`: home page with link to the features hub.
- `src/app/setting-up-nextjs/page.tsx`: setup guide for creating and running a Next.js app.
- `src/app/features/page.tsx`: feature selector page.
- `src/app/features/data-fetching/page.tsx`: data fetching router selector page.
- `src/app/features/data-fetching/_components.tsx`: shared data-fetching page UI helpers.
- `src/app/features/navigation/page.tsx`: navigation topic selector page.
- `src/app/features/navigation/navigation-samples.ts`: shared navigation topic descriptions and code samples.
- `src/app/features/navigation/[slug]/page.tsx`: navigation topic detail page.
- `src/app/features/mutating-data/page.tsx`: mutating data topic selector page.
- `src/app/features/mutating-data/mutation-samples.ts`: shared mutation topic descriptions and code samples.
- `src/app/features/mutating-data/[slug]/page.tsx`: mutating data topic detail page.
- `src/app/features/state-management/page.tsx`: state management topic selector page.
- `src/app/features/state-management/state-samples.ts`: shared state management topic descriptions and code samples.
- `src/app/features/state-management/[slug]/page.tsx`: state management topic detail page.
- `src/app/features/image-font-optimization/page.tsx`: image and font optimization topic selector page.
- `src/app/features/image-font-optimization/optimization-samples.ts`: shared image/font optimization descriptions and code samples.
- `src/app/features/image-font-optimization/[slug]/page.tsx`: image and font optimization topic detail page.
- `src/app/features/data-fetching/app-router/page.tsx`: App Router data-fetching categories.
- `src/app/features/data-fetching/pages-router/page.tsx`: Pages Router data-fetching categories.
- `src/app/features/routing-types/page.tsx`: routing type selector page.
- `src/app/features/component-types/page.tsx`: component type sample page.
- `src/app/features/component-types/component-features-table.tsx`: component comparison table.
- `src/app/features/component-types/component-rendering-comparison.tsx`: server/client rendering comparison section.
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
- `/about`: about page for the learning app
- `/features/navigation`: navigation examples page
- `/features/navigation/link`: Link navigation sample
- `/features/navigation/use-router`: useRouter navigation sample
- `/features/navigation/use-pathname`: usePathname navigation sample
- `/features/navigation/use-search-params`: useSearchParams navigation sample
- `/features/navigation/redirects`: redirects navigation sample
- `/features/navigation/route-parameters`: route parameters navigation sample
- `/features/navigation/query-parameters`: query parameters navigation sample
- `/features/navigation/prefetching`: prefetching navigation sample
- `/features/navigation/client-side-navigation`: client-side navigation sample
- `/features/mutating-data`: mutating data topic selector page
- `/features/mutating-data/server-functions`: Server Functions mutation sample
- `/features/mutating-data/server-actions`: Server Actions mutation sample
- `/features/mutating-data/use-server-directive`: use server directive mutation sample
- `/features/mutating-data/form-submissions`: form submissions mutation sample
- `/features/mutating-data/creating-records`: creating records mutation sample
- `/features/mutating-data/updating-records`: updating records mutation sample
- `/features/mutating-data/deleting-records`: deleting records mutation sample
- `/features/mutating-data/form-validation`: form validation mutation sample
- `/features/mutating-data/pending-states`: pending states mutation sample
- `/features/mutating-data/optimistic-updates`: optimistic updates mutation sample
- `/features/mutating-data/revalidation-after-mutations`: revalidation after mutations sample
- `/features/state-management`: state management topic selector page
- `/features/state-management/url-search-parameters`: URL search parameters state sample
- `/features/state-management/react-usestate`: React useState sample
- `/features/state-management/react-context`: React Context sample
- `/features/state-management/server-state`: server state sample
- `/features/state-management/cookies`: cookies state sample
- `/features/state-management/localstorage`: localStorage state sample
- `/features/state-management/zustand`: Zustand state sample
- `/features/state-management/redux-toolkit`: Redux Toolkit state sample
- `/features/state-management/swr`: SWR state sample
- `/features/state-management/tanstack-query`: TanStack Query state sample
- `/features/image-font-optimization`: image and font optimization topic selector page
- `/features/image-font-optimization/next-image`: next/image sample
- `/features/image-font-optimization/local-images`: local images sample
- `/features/image-font-optimization/remote-images`: remote images sample
- `/features/image-font-optimization/responsive-image-sizes`: responsive image sizes sample
- `/features/image-font-optimization/image-placeholders`: image placeholders sample
- `/features/image-font-optimization/image-loading-priority`: image loading priority sample
- `/features/image-font-optimization/next-font`: next/font sample
- `/features/image-font-optimization/local-fonts`: local fonts sample
- `/features/image-font-optimization/google-fonts`: Google fonts sample
- `/features/data-fetching`: data fetching router selector page
- `/features/data-fetching/app-router`: App Router data-fetching categories
- `/features/data-fetching/app-router/server-side`: App Router server-side fetching
- `/features/data-fetching/app-router/server-side/fetch`: App Router fetch example
- `/features/data-fetching/app-router/server-side/orm-database`: App Router ORM/database example
- `/features/data-fetching/app-router/client-side`: App Router client-side fetching
- `/features/data-fetching/app-router/client-side/use-effect`: App Router useEffect example
- `/features/data-fetching/app-router/client-side/swr`: App Router SWR example
- `/features/data-fetching/app-router/client-side/tanstack-query`: App Router TanStack Query example
- `/features/data-fetching/app-router/streaming`: App Router streaming categories
- `/features/data-fetching/app-router/streaming/loading-tsx`: loading.tsx example
- `/features/data-fetching/app-router/streaming/suspense`: Suspense streaming example
- `/features/data-fetching/pages-router`: Pages Router data-fetching categories
- `/features/data-fetching/pages-router/static-site-generation`: SSG category
- `/features/data-fetching/pages-router/static-site-generation/get-static-props`: getStaticProps example
- `/features/data-fetching/pages-router/server-side-rendering`: SSR category
- `/features/data-fetching/pages-router/server-side-rendering/get-server-side-props`: getServerSideProps example
- `/features/data-fetching/pages-router/incremental-static-regeneration`: ISR category
- `/features/data-fetching/pages-router/incremental-static-regeneration/get-static-props-revalidate`: getStaticProps revalidate example
- `/features/data-fetching/pages-router/client-side-rendering`: CSR category
- `/features/data-fetching/pages-router/client-side-rendering/use-effect`: Pages Router useEffect example
- `/features/data-fetching/pages-router/client-side-rendering/swr`: Pages Router SWR example
- `/features/data-fetching/pages-router/client-side-rendering/tanstack-query`: Pages Router TanStack Query example
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
- Keep breadcrumb colors in `src/app/_components/app-nav.tsx` on the blue fade palette so new routes remain visually consistent.

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
