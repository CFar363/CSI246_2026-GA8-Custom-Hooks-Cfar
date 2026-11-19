// hooks/useFetch.ts
import { useState, useEffect } from "react";

/*
  The useFetch hook simplifies data fetching from an API endpoint.
  It accepts a URL as an argument and returns an object with:
    - data: The fetched data (or null if not yet available)
    - loading: A boolean flag indicating whether the fetch is in progress
    - error: A string containing an error message (if any error occurs)
  
  Instead of chaining .then()/.catch(), we use an async function with try/catch
  inside the useEffect for cleaner error handling.
*/
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Start the fetch request
        const response = await fetch(url);
        // Check if the response is ok
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON data
        const jsonData = await response.json();
        // Update state with the fetched data
        setData(jsonData);
        setError(null);
      } catch (err: any) {
        // Update the error state if something went wrong
        setError(err.message);
      } finally {
        // Stop the loading state
        setLoading(false);
      }
    };

    // Call the async function defined above
    fetchData();
  }, [url]);

  return { data, loading, error };
}
