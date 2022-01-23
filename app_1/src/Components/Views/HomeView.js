import MoviesList from "../MoviesPage/MoviesPage";
import { useEffect, useState } from "react";
import { fetchMoviesByApiAddress } from "../ApiAddress";
import styles from "../Views/Home.module.css";

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesByApiAddress()
      .then((response) => setMovies(response.results))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Trending today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
}
