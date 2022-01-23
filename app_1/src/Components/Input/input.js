import { useState } from "react";
import propTypes from "prop-types";
import styles from "../Input/Input.module.css";

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState("");

  const preOnSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") return alert("Please enter your search!");

    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={preOnSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
