"use client";

import { RouterOutputs } from "@/lib/trpc/shared";
import React from "react";

export const TodoList = ({
  initialTodos,
}: {
  initialTodos?: RouterOutputs["getTodos"];
}) => {
  return (
    <div>
      <h1>TODO</h1>
      {/* <button onClick={() => refetch()}>Refetch</button>
      <div>{isFetching ? "Loading..." : null}</div> */}
      <pre>{JSON.stringify(initialTodos, undefined, 4)}</pre>
    </div>
  );
};
