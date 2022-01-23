import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          exact
          to="/"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
