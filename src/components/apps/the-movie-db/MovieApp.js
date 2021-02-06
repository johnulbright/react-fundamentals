import React, { useState } from "react";
import MovieAppDisplay from "./MovieAppDisplay/MovieAppDisplay";

const myKey = "17476d9cd3979a09747e64b4922fd9e7";

const MovieApp = () => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  function shuffle(int) {
    let array = [];
    for (let i = 0; i < int; i++) {
      array.push(i);
    }
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  const fetcher = () => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${query}&include_adult=false`;
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("fetch error");
        } else {
          return res.json();
        }
      })
      .then((json) => {
        const moviesWithPosters = json.results.filter(
          (movie) => movie.poster_path != null
        );
        const movieCount = moviesWithPosters.length;
        console.log(movieCount);
        console.log(shuffle(movieCount));
        if (movieCount > 0) {
          //let movieID = Math.floor(Math.random() * movieCount);
          let arrayOfIds=shuffle(movieCount);
          setResult([moviesWithPosters[arrayOfIds[0]],moviesWithPosters[arrayOfIds[1]],moviesWithPosters[arrayOfIds[2]],moviesWithPosters[arrayOfIds[3]],moviesWithPosters[arrayOfIds[4]]]);
          console.log(result)
        } else {
          throw new Error("No results found");
        }
      });
  };
  return (
    <div className="main">
      <div className="mainDiv">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={fetcher}>Click for Movie Pic Search</button>
        {result ? <MovieAppDisplay movies={result} /> : null}
        
      </div>
    </div>
  );
};

export default MovieApp;
