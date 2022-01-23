import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesPage/MoviesPage";
import Form from "../Input/input";
import { fetchMovie } from "../ApiAddress";
import styles from "../Views/Views.module.css";

export default function MoviesView() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const search = new URLSearchParams(location.search).get("search") ?? "";

    if (search) {
      setQuery(search);
    }
  }, []);

  useEffect(() => {
    if (!query) return;

    fetchMovie(query)
      .then((response) => {
        history.push({ ...location, search: `search=${query}` });
        setMovies(response.results);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [query]);

  const onSubmit = (search) => {
    setQuery(search);
  };

  return (
    <div className={styles.section}>
      <Form onSubmit={onSubmit} />
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
}
