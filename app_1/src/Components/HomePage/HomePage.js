import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import styles from "../HomePage/HomePage.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div className={styles.container}>
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
    </div>
  );
}

MoviesList.propTypes = {
  movies: propTypes.array.isRequired,
};
