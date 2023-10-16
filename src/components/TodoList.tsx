"use client";

import { api } from "@/lib/trpc/react-provider";
import { RouterOutputs } from "@/lib/trpc/shared";
import React from "react";

export const TodoList = ({
  initialTodos,
}: {
  initialTodos?: RouterOutputs["getTodos"];
}) => {
  const { data, refetch, isFetching } = api.getTodos.useQuery(undefined, {
    initialData: initialTodos,
    enabled: false,
  });
  return (
    <div>
      <h1>TODO</h1>
      <button onClick={() => refetch()}>Refetch</button>
      <div>{isFetching ? "Loading..." : null}</div>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  );
};
