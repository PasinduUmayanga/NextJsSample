# Next.js Routing Playground

[![Build status](https://ci.appveyor.com/api/projects/status/17uy8a50u77cv2u7/branch/main?svg=true)](https://ci.appveyor.com/project/Mahadenamuththa/NextJsSample/branch/main)
[![Build History](https://img.shields.io/badge/AppVeyor-Build%20History-blue?logo=appveyor)](https://ci.appveyor.com/project/Mahadenamuththa/NextJsSample/history)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PasinduUmayanga/NextJsSample)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-package%20manager-CB3837?logo=npm&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
[![Last commit](https://img.shields.io/github/last-commit/PasinduUmayanga/NextJsSample)](https://github.com/PasinduUmayanga/NextJsSample/commits/main)

This repository contains a small Next.js App Router learning application. It provides practical examples of routing, navigation, data fetching, data mutation, state management, component types, and image and font optimization.

## Project structure

```text
NextJsSample/
├─ public/                         Static assets
├─ src/
│  └─ app/
│     ├─ _components/             Shared application components
│     ├─ about/                   About page
│     ├─ features/                Next.js feature examples
│     │  ├─ component-types/      Server, client, and shared UI samples
│     │  ├─ data-fetching/        App Router and Pages Router examples
│     │  ├─ image-font-optimization/
│     │  ├─ mutating-data/        Data mutation examples
│     │  ├─ navigation/           Navigation API examples
│     │  ├─ routing-types/        Static, dynamic, and catch-all routes
│     │  └─ state-management/     Client and server state examples
│     ├─ setting-up-nextjs/       Next.js setup guide
│     ├─ globals.css              Global styles
│     ├─ layout.tsx               Root application layout
│     └─ page.tsx                 Home page
├─ package.json
├─ postcss.config.mjs
├─ tsconfig.json
└─ next.config.ts
```

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run lint   # Run ESLint
```

## Main routes

- `/features` — feature selector
- `/features/navigation` — navigation examples
- `/features/data-fetching` — App Router and Pages Router data fetching
- `/features/mutating-data` — data mutation examples
- `/features/state-management` — state management examples
- `/features/image-font-optimization` — image and font optimization examples
- `/features/component-types` — server and client component examples
- `/features/routing-types` — routing pattern examples
- `/setting-up-nextjs` — project setup guide
- `/about` — information about the learning application
