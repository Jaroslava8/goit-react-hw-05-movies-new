import { SearchReviews } from "../ApiAddress";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ReviewSection() {
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState("idle");

  const { movieId } = useParams();

  useEffect(() => {
    SearchReviews(movieId)
      .then((response) => {
        response.results.length === 0
          ? setStatus("rejected")
          : setStatus("resolved");
        setReview(response.results);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <ul>
      {status === "resolved" &&
        review.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      {status === "rejected" && (
        <h3>We don`t have any reviews for this movie.</h3>
      )}
    </ul>
  );
}
