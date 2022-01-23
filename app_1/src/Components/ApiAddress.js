const KEY = "729735206a195be4b2369f545eebab9e";
const URLPage = "https://api.themoviedb.org/3/";

async function MoviesApiAddress(url = "", config = {}) {
  try {
    const response = await fetch(url, config);

    if (!response.ok) throw Error("An error occurred, please try again later");

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export function fetchMoviesByApiAddress() {
  return MoviesApiAddress(`${URLPage}trending/movie/day?api_key=${KEY}`);
}

export async function fetchMovie(query) {
  try {
    const parsedResponse = await MoviesApiAddress(
      `${URLPage}search/movie?api_key=${KEY}&language=en-US&query=${query}`
    );

    if (parsedResponse.results.length === 0)
      throw Error(
        `It looks like there aren't any great matches for your search "${query}". Please try again`
      );

    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export function searchMovieId(movieId) {
  return MoviesApiAddress(
    `${URLPage}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export function SearchActor(movieId) {
  return MoviesApiAddress(
    `${URLPage}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function SearchReviews(movieId) {
  return MoviesApiAddress(
    `${URLPage}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
  );
}
