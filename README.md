![Image](https://github.com/user-attachments/assets/deeedf66-919e-44ff-a59f-b488111194d2)
[![Build status](https://ci.appveyor.com/api/projects/status/79ff1day6l9uhqae?svg=true)](https://ci.appveyor.com/project/Mahadenamuththa/nextjssample)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://pasinduumayanga.github.io/NextJsSample/)

## Build History

- **AppVeyor project:** [NextJsSample](https://ci.appveyor.com/project/Mahadenamuththa/nextjssample)
- **Build history:** [View past AppVeyor builds](https://ci.appveyor.com/project/Mahadenamuththa/nextjssample/history)
- **Build config:** [`appveyor.yml`](appveyor.yml)

AppVeyor installs Node.js 20, runs `npm ci`, builds the project with
`npm run build`, and runs `npm test --if-present`.



## First of All, What Is Next.js?

### The React Framework for the Web
Next.js is a React framework that enables developers to build fast, scalable, and user-friendly web applications with minimal configuration. It enhances standard React by offering built-in features like server-side rendering, static site generation, routing, and API support.

## ⭐ Key Features of Next.js
 Feature                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| ✅ **File-based Routing**         | Pages created in the `pages/` folder become routes automatically           |
| ⚡ **Server-Side Rendering (SSR)**| Pre-renders content per request for SEO and freshness                      |
| 📦 **Static Site Generation (SSG)**| Generates static HTML at build time                                       |
| 🌀 **Incremental Static Regeneration (ISR)** | Updates static pages after deployment without rebuilds             |
| 🛠️ **API Routes**                | Build backend functions using `pages/api/`                                 |
| 🧑‍🎨 **CSS/SCSS Modules**         | Scoped styling with full support for global and modular CSS                |
| 🖼️ **Image Optimization**        | Optimized, lazy-loaded images via the built-in `<Image />` component       |
| 🛣️ **Dynamic Routing**           | Build URLs like `/product/[id]` easily                                    |
| ⚙️ **Built-in TypeScript**       | Native support for TypeScript with type checking and config setup          |
| 🌐 **Internationalization (i18n)**| Multi-language support out of the box                                      |
| 🔐 **Middleware Support**        | Add auth, redirects, logging at the edge before route resolution           |
| 🧠 **Fast Refresh**              | Instant feedback while developing                                          |

---

## 🛠 Getting Started

To create this project, run:

```bash
npx create-next-app@latest next-js-sample
```
![image](https://github.com/user-attachments/assets/422f682e-f256-4084-b15b-ba9f295a64e4)

```bash
cd next-js-sample
npm run dev
```
![image](https://github.com/user-attachments/assets/84ddecc5-f0ff-45ef-8600-2cf1fd53ab8b)

### Routings
✅ 1. Single Routing

📌 Description:
Basic routing where each route corresponds to a top-level folder in src/app.

📁 Example Structure:

![image](https://github.com/user-attachments/assets/0613cdcc-8c55-4f87-bb24-c4eea612ee89)

✅ 2. Nested Routing

📌 Description:
Routing that reflects nested folder structure. Great for layout composition and sections.

📁 Example Structure:

![image](https://github.com/user-attachments/assets/233de86e-b6cb-41ad-9a57-8c09b39631f9)

✅ 3. Dynamic Routing

📌 Description:
Routes that capture variable values using brackets ([param]), e.g., /blog/[slug].

📁 Example Structure:

![image](https://github.com/user-attachments/assets/a3bb0502-e883-411a-a450-bf8d90d8846a)

✅ 4. Nested Dynamic Routing

📌 Description:
Nested Dynamic Routes allow you to create URLs like /users/123/posts/456 where both userId and postId are dynamic.

📁 Example Structure:

![image](https://github.com/user-attachments/assets/c811fbcf-2f5e-4dc9-b01c-3d2a7ce48252)

✅ 5. NCatch-All Segments Routing

📌 Description:
A catch-all route matches multiple segments of a URL using [...slug] syntax.
A optional catch-all route uses [[...slug]] to match zero or more segments.

✅ Required Catch-All Segment
📁 Example Structure:

![image](https://github.com/user-attachments/assets/82808564-9634-4892-89ca-85550a3a6589)

✅ Optional Catch-All Segment
📁 Example Structure:

![image](https://github.com/user-attachments/assets/ea8ee3eb-0c07-4d15-8b7f-08e864f3ca64)

