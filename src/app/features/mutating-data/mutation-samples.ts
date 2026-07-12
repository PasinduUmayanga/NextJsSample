export type MutationSample = {
  code: string;
  description: string;
  details: string[];
  slug: string;
  title: string;
};

export const MUTATION_SAMPLES: MutationSample[] = [
  {
    slug: "server-functions",
    title: "Server Functions",
    description:
      "Server Functions are async functions that run on the server and can be called from the app.",
    details: [
      "Use Server Functions for work that must stay on the server, such as database writes, private API calls, or secure business rules.",
      "They can be defined with the use server directive and reused by forms, Server Components, or Client Components.",
      "Keep validation and authorization inside the function because client input should never be trusted.",
    ],
    code: `"use server";

export async function saveMessage(formData: FormData) {
  const message = String(formData.get("message") ?? "");

  if (!message.trim()) {
    return { error: "Message is required." };
  }

  await db.message.create({ data: { text: message } });

  return { success: true };
}`,
  },
  {
    slug: "server-actions",
    title: "Server Actions",
    description:
      "Server Actions are Server Functions used as mutation handlers from forms or client interactions.",
    details: [
      "Use Server Actions when a user action changes data, such as creating, updating, or deleting a record.",
      "They run on the server, so sensitive mutation logic does not need to ship to the browser.",
      "After the mutation, they commonly call revalidatePath, revalidateTag, redirect, or return a small result object.",
    ],
    code: `"use server";

import { revalidatePath } from "next/cache";

export async function completeTodo(id: string) {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  });

  revalidatePath("/todos");
}`,
  },
  {
    slug: "use-server-directive",
    title: 'The "use server" directive',
    description:
      'The "use server" directive marks a function or file so its exported async functions run on the server.',
    details: [
      "Place use server at the top of a file to make all exported async functions in that file server functions.",
      "You can also place it inside an async function body when defining an inline Server Action.",
      "Server functions can safely access backend resources, but their arguments still come from the client and must be validated.",
    ],
    code: `"use server";

export async function deleteComment(commentId: string) {
  if (!commentId) {
    throw new Error("Missing comment id.");
  }

  await db.comment.delete({ where: { id: commentId } });
}`,
  },
  {
    slug: "form-submissions",
    title: "Form submissions",
    description:
      "Forms can call Server Actions directly with the action prop.",
    details: [
      "A form action receives FormData automatically when the form is submitted.",
      "This works without writing a client-side submit handler for the basic mutation flow.",
      "Use named inputs so the Server Action can read values from FormData.",
    ],
    code: `import { createTodo } from "./actions";

export default function TodoForm() {
  return (
    <form action={createTodo}>
      <input name="title" placeholder="Todo title" />
      <button type="submit">Create</button>
    </form>
  );
}`,
  },
  {
    slug: "creating-records",
    title: "Creating records",
    description:
      "Create records in a Server Action after reading and validating form input.",
    details: [
      "Read values from FormData or from typed arguments passed to the Server Action.",
      "Validate required fields before writing to the database.",
      "Revalidate the affected route so the new record appears in the UI.",
    ],
    code: `"use server";

import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();

  if (!title) {
    return { error: "Title is required." };
  }

  await db.todo.create({ data: { title } });
  revalidatePath("/todos");
}`,
  },
  {
    slug: "updating-records",
    title: "Updating records",
    description:
      "Update records by passing an id and the changed values to a Server Action.",
    details: [
      "Updates usually need a stable id from the route, hidden form input, or component props.",
      "Only allow fields that the current user is permitted to change.",
      "After the update, revalidate the list or detail route that displays the changed record.",
    ],
    code: `"use server";

import { revalidatePath } from "next/cache";

export async function renameTodo(id: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();

  await db.todo.update({
    where: { id },
    data: { title },
  });

  revalidatePath("/todos");
}`,
  },
  {
    slug: "deleting-records",
    title: "Deleting records",
    description:
      "Delete records on the server and refresh the UI that listed them.",
    details: [
      "Delete actions should verify the user is allowed to remove the record.",
      "Use an id from a trusted server-rendered source or validate the submitted id carefully.",
      "Revalidate the affected list route so deleted records disappear from cached UI.",
    ],
    code: `"use server";

import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  await db.todo.delete({ where: { id } });

  revalidatePath("/todos");
}`,
  },
  {
    slug: "form-validation",
    title: "Form validation",
    description:
      "Validate form input inside the Server Action before mutating data.",
    details: [
      "Client-side validation improves user experience, but server-side validation protects the actual mutation.",
      "Return structured errors when the form should stay on the page and show feedback.",
      "Validate type, required fields, length, permissions, and any business rules.",
    ],
    code: `"use server";

export async function createProfile(formData: FormData) {
  const displayName = String(formData.get("displayName") ?? "").trim();

  if (displayName.length < 3) {
    return { error: "Display name must be at least 3 characters." };
  }

  await db.profile.create({ data: { displayName } });

  return { success: true };
}`,
  },
  {
    slug: "pending-states",
    title: "Pending states",
    description:
      "Pending states show the user that a form submission or mutation is still running.",
    details: [
      "Use useFormStatus inside a Client Component rendered within a form.",
      "The pending value is true while the form action is submitting.",
      "Disable buttons or show loading text so users do not submit the same mutation repeatedly.",
    ],
    code: `"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Saving..." : "Save"}
    </button>
  );
}`,
  },
  {
    slug: "optimistic-updates",
    title: "Optimistic updates",
    description:
      "Optimistic updates show the expected result before the server finishes.",
    details: [
      "Use optimistic UI when a mutation is likely to succeed and fast feedback matters.",
      "Keep the server mutation as the source of truth and handle failures gracefully.",
      "React useOptimistic can temporarily add or change items while the Server Action runs.",
    ],
    code: `"use client";

import { useOptimistic } from "react";

export function TodoList({ todos }: { todos: string[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, title: string) => [...state, title]
  );

  return optimisticTodos.map((todo) => <p key={todo}>{todo}</p>);
}`,
  },
  {
    slug: "revalidation-after-mutations",
    title: "Revalidation after mutations",
    description:
      "Revalidation refreshes cached data after the server changes records.",
    details: [
      "Call revalidatePath when a mutation changes data shown by a specific route.",
      "Call revalidateTag when fetch requests use tags and several routes depend on the same data.",
      "Revalidation keeps server-rendered UI in sync after creates, updates, and deletes.",
    ],
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
];
