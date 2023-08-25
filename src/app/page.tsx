import { TodoList } from "@/components/TodoList";
import { serverClient } from "@/lib/trpc/serverClient";

export default async function Home() {
  const todos = await serverClient.getTodos();

  return (
    <main className="container my-5">
      <TodoList initialTodos={todos} />
    </main>
  );
}
