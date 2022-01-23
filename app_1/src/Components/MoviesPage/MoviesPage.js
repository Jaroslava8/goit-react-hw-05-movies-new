import { Link, useLocation } from "react-router-dom";
import styles from '../MoviesPage/MoviesPage.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
