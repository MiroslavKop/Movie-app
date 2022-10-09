import {getVoteColor} from "./getColor";
import {API_KEY, BASE_URL, API_URL, IMG_URL, SEARCH_URL, getMovies} from "./api";
import {modalWindow, openModal} from "./modalWindow";

export function showMovies(data) {
    let movies = document.querySelector(".movies");
    movies.innerHTML = "";
    data.forEach((movie) => {
        let movieEl = document.createElement("div");

        movieEl.classList.add("movie");
        movieEl.innerHTML = `
                <div class="movie__wrapper"><img src="${IMG_URL + movie.poster_path}" alt=${movie.title} class="movie__poster"></div>
                <div class="movie__info">
                    <h2 class="movie__info-title">${movie.title}</h2>
                    <div class="movie__info-raiting ${getVoteColor(movie.vote_average)}">${movie.vote_average}</div>
                </div>
    `;
        movieEl.addEventListener("click", () => openModal(movie.id));
        movies.append(movieEl);
    });
}


