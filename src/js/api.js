import {showMovies} from "./showMovies";

export {API_KEY, BASE_URL, API_URL, IMG_URL, SEARCH_URL, getMovies};

const API_KEY = "api_key=f2e3c68291e522a1c511f077761e4733";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;

function getMovies(url) {
    fetch(url)
    .then(response => response.json())
    .then(result => {
        showMovies(result.results);
    })
    .catch(error => console.error(error));
}
