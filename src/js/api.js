// import { showMovies } from "./showMovies";

// export { API_KEY, BASE_URL, API_URL, IMG_URL, SEARCH_URL, getMovies };

// const API_KEY = "api_key=f2e3c68291e522a1c511f077761e4733";
const BASE_URL = "https://api.themoviedb.org/3";
// const API_URL =
//   BASE_URL +
//   "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
//   API_KEY;
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
// const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;

// function getMovies(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((result) => {
//       showMovies(result.results); // Bad practise. Don't concat the API logic and UI part
//     })
//     .catch((error) => console.error(error));
// }

const API_KEY = "f2e3c68291e522a1c511f077761e4733"; // Try to move it to .env file. It's a better practise

export const getMovies = async () => {
  // https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
  const params = new URLSearchParams({
    api_key: API_KEY,
    "primary_release_date.gte": "2014-09-15",
    "primary_release_date.lte": "2014-10-22",
  });
  const response = await fetch(`${BASE_URL}/discover/movie?${params}`);
  const { results } = await response.json();

  return results;
};

export const searchMovies = async (query) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    query,
  });
  const response = await fetch(`${BASE_URL}/search/movie?${params}`);
  const { results } = await response.json();

  return results;
};

export const getMovieById = async (id) => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
  });
  const response = await fetch(`${BASE_URL}/movie/${id}?${params}`);
  const result = await response.json();

  return result;
};
