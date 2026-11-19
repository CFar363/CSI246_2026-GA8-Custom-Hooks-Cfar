// app/server-action/getData.ts
/*
  The getServerData function mimics the behavior of the useFetch hook,
  but it runs on the server. It fetches data from an API using async/await
  and returns an object with data, loading (always false on render), and error.
*/
export async function getServerData<T>(
  url: string,
): Promise<{ data: T | null; loading: boolean; error: string | null }> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return { data, loading: false, error: null };
  } catch (err: any) {
    return { data: null, loading: false, error: err.message };
  }
}
