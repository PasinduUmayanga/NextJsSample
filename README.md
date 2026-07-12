![Next.js Learning Hub](https://github.com/user-attachments/assets/deeedf66-919e-44ff-a59f-b488111194d2)

[![Build status](https://ci.appveyor.com/api/projects/status/79ff1day6l9uhqae/branch/master?svg=true)](https://ci.appveyor.com/project/Mahadenamuththa/nextjssample/branch/master)
[![Build History](https://img.shields.io/badge/AppVeyor-Build%20History-blue)](https://ci.appveyor.com/project/Mahadenamuththa/nextjssample/history)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://pasinduumayanga.github.io/NextJsSample/)

# Next.js Learning Hub

This project is a Next.js App Router learning sample. It collects small, focused pages that explain common Next.js concepts with short descriptions and syntax-highlighted code examples.

## What This Project Covers

| Section | Route | Learning focus |
| --- | --- | --- |
| Setting Up Next.js | `/setting-up-nextjs` | Installation order, project creation, dependencies, and development commands |
| Features | `/features` | Main menu for all learning sections |
| Routing | `/features/routing-types` | App Router, Pages Router, static routes, nested routes, dynamic routes, and catch-all routes |
| Component Types | `/features/component-types` | Server Components, Client Components, Shared UI Components, and rendering comparison |
| Data Fetching | `/features/data-fetching` | App Router fetching, Pages Router data functions, streaming, SWR, and TanStack Query |
| Navigation | `/features/navigation` | `<Link>`, `useRouter()`, `usePathname()`, `useSearchParams()`, redirects, route params, query params, prefetching, and client-side navigation |
| Mutating Data | `/features/mutating-data` | Server Functions, Server Actions, forms, creating, updating, deleting, validation, pending states, optimistic updates, and revalidation |
| State Management | `/features/state-management` | URL state, React state, React Context, server state, cookies, localStorage, Zustand, Redux Toolkit, SWR, and TanStack Query |
| Image and Font Optimization | `/features/image-font-optimization` | `next/image`, local images, remote images, responsive sizes, placeholders, priority loading, `next/font`, local fonts, and Google fonts |
| About | `/about` | Project overview page |
| Not Found | Any missing route | Custom 404 page |

## Learning Sections

### Routing

The routing section separates App Router and Page Routing examples. App Router samples include:

- Single route pages
- Nested routes
- Dynamic route segments
- Nested dynamic route segments
- Catch-all and optional catch-all segments
- An App Routing about page with the same visual style

### Component Types

The component section compares how components render and where they should run:

- Server Components for server-only data and backend access
- Client Components for browser interactivity, hooks, and lifecycle behavior
- Shared UI Components for reusable presentation
- A comparison table for fetching data, backend access, sensitive information, dependencies, state, and React component usage

### Data Fetching

The data fetching section is organized by router type.

App Router examples:

- Server-side data fetching with `fetch()`
- ORM or direct database query patterns
- Client-side fetching with `useEffect`
- SWR and TanStack Query samples
- Streaming with `loading.tsx` and React `<Suspense>`

Pages Router examples:

- Static Site Generation with `getStaticProps()`
- Server-Side Rendering with `getServerSideProps()`
- Incremental Static Regeneration with `getStaticProps()` and `revalidate`
- Client-Side Rendering with `useEffect`, SWR, and TanStack Query

### Navigation

The navigation section gives a separate page for each navigation concept:

- `<Link>`
- `useRouter()`
- `usePathname()`
- `useSearchParams()`
- Redirects
- Route parameters
- Query parameters
- Prefetching
- Client-side navigation

### Mutating Data

The mutating data section explains common App Router mutation patterns:

- Server Functions
- Server Actions
- The `"use server"` directive
- Form submissions
- Creating records
- Updating records
- Deleting records
- Form validation
- Pending states
- Optimistic updates
- Revalidation after mutations

### State Management

The state management section now includes expanded code samples for:

- URL search parameters between pages
- React `useState`
- React Context with provider setup and usage
- Server state with caching and revalidation examples
- Cookies for request-backed state
- localStorage for browser-only persisted state
- Zustand stores, selectors, and persistence
- Redux Toolkit slices, store setup, typed hooks, Provider, and usage
- SWR fetching, conditional keys, mutation cache updates, and provider setup
- TanStack Query provider setup, queries, query keys, mutations, invalidation, and freshness settings

### Image and Font Optimization

The optimization section covers:

- `next/image`
- Local image usage
- Remote image usage
- Responsive image sizes
- Image placeholders
- Priority image loading
- `next/font`
- Local fonts
- Google fonts

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run the configured lint command |

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS dependency setup
- App Router
- CSS modules for shared UI components

