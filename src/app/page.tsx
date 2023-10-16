import { TodoList } from "@/components/TodoList";
import { apiServer } from "@/lib/trpc/server";

export default async function Home() {
  const todos = await apiServer.getTodos.query();

  return (
    <main className="container my-5">
      <TodoList initialTodos={todos} />
    </main>
  );
}
