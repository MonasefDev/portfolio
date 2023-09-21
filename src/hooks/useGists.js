import { useState, useEffect } from "react";

export function useGists(KEY) {
  const [gist, setGist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    // callback?.();

    async function fetchGists() {
      try {
        setIsLoading("loading");
        setError("");

        const res = await fetch(`https://api.github.com/gists/${KEY}`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching CodeSnippet");

        const data = await res.json();
        if (data.Response === "False") throw new Error("CodeSnippet not found");

        setGist(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading("fulfield");
      }
    }
    fetchGists();
  }, []);

  return { gist, isLoading, error };
}
