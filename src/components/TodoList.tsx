"use client";

import { RouterOutputs, trpc } from "@/lib/trpc/client";
import React from "react";

export const TodoList = ({
  initialTodos,
}: {
  initialTodos?: RouterOutputs["getTodos"];
}) => {
  const { data, refetch } = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
    enabled: false,
  });
  return (
    <div>
      <h1>TODO</h1>
      <button onClick={() => refetch()}>Refetch</button>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  );
};
