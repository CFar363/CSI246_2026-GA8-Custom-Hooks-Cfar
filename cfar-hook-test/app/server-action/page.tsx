// app/server-action/page.tsx
import { getServerData } from "./getData";

/*
  This is a server component that uses a server action to fetch data
  similarly to the useFetch hook. The getServerData function returns an object
  with data, loading, and error, which is then used to render the page.
*/
export default async function ServerActionPage() {
  // Use the server action function to fetch data from a public API.
  const { data, loading, error } = await getServerData<any>(
    "https://jsonplaceholder.typicode.com/todos/1",
  );

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Server Action Data Fetch</h1>
      {/* Although loading is always false at render time in a server component,
          we include it here to mirror the useFetch hook’s API */}
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
