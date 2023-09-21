import { useState, useEffect } from "react";

export function useComments(url) {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    // callback?.();

    async function fetchComments() {
      try {
        setIsLoading("loading");
        setError("");

        const res = await fetch(url);

        if (!res.ok)
          throw new Error("Something went wrong with fetching Comments");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Comments not found");

        setComment(data[0].body);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        console.log(comment);
        setIsLoading("fulfield");
      }
    }
    fetchComments();
  }, []);

  return { comment, isLoading, error };
}
