export type StateSample = {
  code?: string;
  codeBlocks?: {
    code: string;
    title: string;
  }[];
  description: string;
  details: string[];
  slug: string;
  title: string;
};

export const STATE_SAMPLES: StateSample[] = [
  {
    slug: "url-search-parameters",
    title: "URL search parameters",
    description:
      "Store shareable state in the URL query string for filters, sorting, pagination, and search.",
    details: [
      "URL search parameters are bookmarkable, shareable, and survive refreshes.",
      "One page can navigate to another page with query values in the href, such as /products?query=shoes&page=2.",
      "The destination page reads those values from the App Router searchParams page prop on the server.",
      "Use this when the state should describe the page view, such as filters, sorting, pagination, and search terms.",
    ],
    codeBlocks: [
      {
        title: "app/shop/page.tsx",
        code: `import Link from "next/link";

export default function ShopLinksPage() {
  return (
    <section>
      <h1>Choose a product view</h1>
      <Link href="/products?query=shoes&page=2&sort=price">
        Open shoes sorted by price
      </Link>
    </section>
  );
}`,
      },
      {
        title: "app/products/page.tsx",
        code: `type ProductsPageProps = {
  searchParams: Promise<{ page?: string; sort?: string; query?: string }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { page = "1", sort = "asc", query = "" } = await searchParams;

  return (
    <section>
      <h1>Products</h1>
      <p>Search query: {query}</p>
      <p>Current page: {page}</p>
      <p>Sort order: {sort}</p>
    </section>
  );
}`,
      },
    ],
  },
  {
    slug: "react-usestate",
    title: "React useState",
    description:
      "Use useState for local interactive state inside one Client Component.",
    details: [
      "useState is best for small UI state like open menus, selected tabs, counters, and draft input values.",
      "Because it needs browser interactivity, the component must use the use client directive.",
      "Keep useState close to the UI that owns the state so the rest of the page can stay as Server Components.",
      "Use functional updates when the next value depends on the previous value.",
      "When storing objects or arrays, create a new object or array instead of mutating the existing one.",
    ],
    codeBlocks: [
      {
        title: "Counter state",
        code: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
      {
        title: "Toggle state",
        code: `"use client";

import { useState } from "react";

export default function TogglePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setIsOpen((value) => !value)}>
        {isOpen ? "Hide details" : "Show details"}
      </button>
      {isOpen ? <p>These details are controlled by local state.</p> : null}
    </section>
  );
}`,
      },
      {
        title: "Text input state",
        code: `"use client";

import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  return (
    <label>
      Search
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <span>Current query: {query}</span>
    </label>
  );
}`,
      },
      {
        title: "Selected tab state",
        code: `"use client";

import { useState } from "react";

const TABS = ["Overview", "Examples", "Notes"];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <section>
      {TABS.map((tab) => (
        <button key={tab} onClick={() => setSelectedTab(tab)}>
          {tab}
        </button>
      ))}
      <p>Selected tab: {selectedTab}</p>
    </section>
  );
}`,
      },
      {
        title: "Object state",
        code: `"use client";

import { useState } from "react";

export default function ProfileDraft() {
  const [profile, setProfile] = useState({
    displayName: "",
    role: "student",
  });

  return (
    <input
      value={profile.displayName}
      onChange={(event) =>
        setProfile((current) => ({
          ...current,
          displayName: event.target.value,
        }))
      }
    />
  );
}`,
      },
      {
        title: "Array state",
        code: `"use client";

import { useState } from "react";

export default function TodoDrafts() {
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo() {
    setTodos((current) => [...current, \`Todo \${current.length + 1}\`]);
  }

  return (
    <section>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <p key={todo}>{todo}</p>
      ))}
    </section>
  );
}`,
      },
    ],
  },
  {
    slug: "react-context",
    title: "React Context",
    description:
      "Use React Context to share client state across a subtree without passing props through every level.",
    details: [
      "React Context is commonly used for theme, current workspace, sidebar state, or authenticated user display data.",
      "In the App Router, context providers should be Client Components.",
      "Render providers as deep as practical so static server-rendered parts remain easy to optimize.",
      "Create the provider in a client file, wrap the route segment that needs it, then consume it from child Client Components.",
      "Avoid putting fast-changing global state around the entire app unless the whole app truly needs it.",
    ],
    codeBlocks: [
      {
        title: "Step 1 - Create the context provider",
        code: `"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}`,
      },
      {
        title: "Step 2 - Wrap only the route segment that needs context",
        code: `import { ThemeProvider } from "./theme-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}`,
      },
      {
        title: "Step 3 - Consume and update context in a Client Component",
        code: `"use client";

import { useTheme } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}`,
      },
      {
        title: "Step 4 - Use the component inside the wrapped route",
        code: `import ThemeSwitcher from "./theme-switcher";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <ThemeSwitcher />
    </main>
  );
}`,
      },
    ],
  },
  {
    slug: "server-state",
    title: "Server state",
    description:
      "Use server state for data owned by a backend, database, API, or remote service.",
    details: [
      "Server state is not fully controlled by the browser because other users, jobs, or services can change it.",
      "In Next.js, Server Components can fetch server state close to the data source.",
      "For client-side server state, use tools like SWR or TanStack Query for caching, loading, errors, and refetching.",
      "Choose the cache behavior based on how fresh the data must be for the user.",
      "After mutations, revalidate the route or cache tag that displays the changed server state.",
    ],
    codeBlocks: [
      {
        title: "Fetch server state in a Server Component",
        code: `export default async function ProductsPage() {
  const products = await fetch("https://api.example.com/products").then((res) =>
    res.json()
  );

  return (
    <ul>
      {products.map((product: { id: string; name: string }) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        title: "Always fetch fresh server state",
        code: `export default async function AccountPage() {
  const account = await fetch("https://api.example.com/account", {
    cache: "no-store",
  }).then((res) => res.json());

  return <h1>Balance: {account.balance}</h1>;
}`,
      },
      {
        title: "Cache server state for a period of time",
        code: `export default async function ReportsPage() {
  const reports = await fetch("https://api.example.com/reports", {
    next: { revalidate: 300 },
  }).then((res) => res.json());

  return reports.map((report: { id: string; title: string }) => (
    <p key={report.id}>{report.title}</p>
  ));
}`,
      },
      {
        title: "Tag cached server state",
        code: `export default async function PostsPage() {
  const posts = await fetch("https://api.example.com/posts", {
    next: { tags: ["posts"] },
  }).then((res) => res.json());

  return posts.map((post: { id: string; title: string }) => (
    <article key={post.id}>{post.title}</article>
  ));
}`,
      },
      {
        title: "Revalidate server state after a mutation",
        code: `"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function publishPost(id: string) {
  await db.post.update({
    where: { id },
    data: { published: true },
  });

  revalidatePath("/posts");
  revalidateTag("posts");
}`,
      },
      {
        title: "Pass server state into a Client Component",
        code: `import ProductFilters from "./product-filters";

export default async function ProductsPage() {
  const categories = await getCategories();

  return <ProductFilters categories={categories} />;
}`,
      },
      {
        title: "Use the server data interactively on the client",
        code: `"use client";

export default function ProductFilters({
  categories,
}: {
  categories: string[];
}) {
  return (
    <select>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
}`,
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookies",
    description:
      "Use cookies for small request-backed state the server should know before rendering.",
    details: [
      "Cookies work well for theme, locale, session hints, and other small preferences.",
      "Server Components can read incoming cookies with the cookies function.",
      "Server Functions and Route Handlers can also set or delete outgoing cookies.",
    ],
    code: `import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return <main data-theme={theme}>Current theme: {theme}</main>;
}`,
  },
  {
    slug: "localstorage",
    title: "localStorage",
    description:
      "Use localStorage for browser-only state that should persist on one device.",
    details: [
      "localStorage is only available in the browser, so read it from Client Components.",
      "It is useful for low-risk preferences, draft UI settings, and local-only values.",
      "Do not store secrets or trusted authorization state in localStorage.",
    ],
    code: `"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  function saveTheme(nextTheme: string) {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return <button onClick={() => saveTheme("dark")}>{theme}</button>;
}`,
  },
  {
    slug: "zustand",
    title: "Zustand",
    description:
      "Use Zustand for small-to-medium client stores with a hook-based API and little setup.",
    details: [
      "Zustand stores are hooks, so components select the state they need and re-render when that slice changes.",
      "It does not require wrapping the app in a Provider for basic usage.",
      "In Next.js, keep browser-specific Zustand stores in Client Components and avoid sharing per-user server data through module-level stores.",
    ],
    code: `"use client";

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={increment}>Count: {count}</button>;
}`,
  },
  {
    slug: "redux-toolkit",
    title: "Redux Toolkit",
    description:
      "Use Redux Toolkit for larger client state needs with slices, actions, reducers, and devtools.",
    details: [
      "Redux Toolkit standardizes Redux setup with configureStore and createSlice.",
      "It is a good fit when many distant components share complex client state and explicit actions are helpful.",
      "In App Router projects, put the Redux Provider in a Client Component provider wrapper.",
    ],
    code: `import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});`,
  },
  {
    slug: "swr",
    title: "SWR",
    description:
      "Use SWR for client-side server state with caching, loading states, errors, and revalidation.",
    details: [
      "SWR is useful when a Client Component needs remote data from an API endpoint.",
      "A fetcher function defines how data is loaded, and useSWR returns data, error, and loading state.",
      "Use it for client-side data that should stay fresh after focus, reconnect, or cache updates.",
    ],
    code: `"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile({ userId }: { userId: string }) {
  const { data, error, isLoading } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher
  );

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <p>Hello {data.name}</p>;
}`,
  },
  {
    slug: "tanstack-query",
    title: "TanStack Query",
    description:
      "Use TanStack Query for advanced client-side server state, caching, synchronization, and background updates.",
    details: [
      "TanStack Query manages async server state with query keys, query functions, cache lifetimes, and refetch behavior.",
      "Wrap client UI with QueryClientProvider, then call useQuery in Client Components.",
      "It is a strong fit for apps with many API-backed views, pagination, mutations, cache invalidation, and background refresh needs.",
    ],
    code: `"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function UserList() {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;

  return data.map((user: { id: string; name: string }) => (
    <p key={user.id}>{user.name}</p>
  ));
}

export default function UsersProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}`,
  },
];
