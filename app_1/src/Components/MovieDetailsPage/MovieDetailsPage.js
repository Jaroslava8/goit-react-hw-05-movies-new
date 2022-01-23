import propTypes from "prop-types";

export default function MovieDetails({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <ul>
        <li>
          <h2>{movie.title}</h2>
          <p>{`User Score: ${movie.vote_average}`}</p>
        </li>
        <li>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </li>
        <li>
          <h4>Genres</h4>
          <p>
            {movie?.genres?.reduce(
              (genres, genre) => genres + " " + genre.name,
              ""
            )}
          </p>
        </li>
      </ul>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: propTypes.object.isRequired,
};
