import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";

const HomeView = lazy(() => import("./Components/Views/HomeView"));
const MoviesView = lazy(() => import("./Components/Views/MoviesView"));
const MovieDatailsView = lazy(() => import("./Components/Views/MovieView"));

export default function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<h2>Preparing</h2>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/movies">
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDatailsView />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
