// app/use-fetch/page.tsx
"use client";

import React from "react";
import { useFetch } from "@/hooks/useFetch";

/*
  This page demonstrates the useFetch hook in action.
  It fetches data from a public API and displays:
    - A loading message while the data is being fetched.
    - An error message if the fetch fails.
    - The fetched data when available.
*/
export default function UseFetchPage() {
  // Change the URL below if needed; this sample uses a placeholder API.
  const { data, loading, error } = useFetch<any>(
    "https://jsonplaceholder.typicode.com/todos/1",
  );

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Data Fetch Example</h1>
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div className="bg-gray-100 p-4 rounded-md">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
