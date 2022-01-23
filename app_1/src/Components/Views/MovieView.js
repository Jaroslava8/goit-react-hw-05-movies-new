import {
  Link,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { searchMovieId } from "../ApiAddress";
import MovieDetails from "../MovieDetailsPage/MovieDetailsPage";
import styles from "../Views/Views.module.css";

const MovieCast = lazy(() => import("../Cast/Cast"));
const MovieReview = lazy(() => import("../Reviews/Reviews"));

export default function MovieDatailsView() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    searchMovieId(movieId)
      .then((response) => setMovie(response))
      .catch((error) => alert(error.message));
  }, []);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const onClick = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <div className={styles.section}>
      <button className={styles.button} type="button" onClick={onClick}>
        Go back
      </button>
      {movie?.title && <MovieDetails movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link
            className={styles.cast}
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
            className={styles.cast}
              to={{
                pathname: `${url}/review`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h2>Preparing...</h2>}>
        <Route path={`${path}/cast`}>
          <MovieCast />
        </Route>

        <Route path={`${path}/review`}>
          <MovieReview />
        </Route>
      </Suspense>
    </div>
  );
}
