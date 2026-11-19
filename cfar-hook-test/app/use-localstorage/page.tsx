// app/use-localstorage/page.tsx
"use client";

import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

/*
  This page demonstrates the useLocalStorage hook.
  It includes an input field tied to localStorage so that the entered data persists across page reloads.
*/
export default function UseLocalStoragePage() {
  const [name, setName] = useLocalStorage<string>("userName", "");

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Local Storage Example</h1>
      <label className="block mb-2">
        Enter your name (will persist across reloads):
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <p className="text-gray-700">
        Your stored name is: <strong>{name}</strong>
      </p>
    </main>
  );
}
