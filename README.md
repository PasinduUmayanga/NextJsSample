![Image](https://github.com/user-attachments/assets/deeedf66-919e-44ff-a59f-b488111194d2)


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
