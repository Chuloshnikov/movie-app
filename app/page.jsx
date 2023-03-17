"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const API_KEY="64d6e48eb0f228948a0484363da88192"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <main>
      {data && (
        <ul>
          {data.results.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}