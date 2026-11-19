// app/use-debounce/page.tsx
"use client";

import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

/*
  This page demonstrates the useDebounce hook.
  It includes an input field where:
    - The immediate value updates as the user types.
    - The debounced value updates only after the user stops typing for 500ms.
*/
export default function UseDebouncePage() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Debounce Example</h1>
      <label className="block mb-2">
        Enter text (updates will be debounced):
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <p className="text-gray-700">
        <strong>Immediate Value:</strong> {value}
      </p>
      <p className="text-gray-700">
        <strong>Debounced Value (500ms delay):</strong> {debouncedValue}
      </p>
    </main>
  );
}
