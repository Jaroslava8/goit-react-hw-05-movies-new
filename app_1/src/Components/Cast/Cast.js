import { SearchActor } from "../ApiAddress";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Cast/Cast.module.css";

export default function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    SearchActor(movieId)
      .then((response) => setCast(response.cast))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <ul className={styles.list}>
      {cast.length !== 0 &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <li className={styles.item} key={id}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}
