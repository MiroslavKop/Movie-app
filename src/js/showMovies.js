import { getVoteColor } from "./getColor";
import { IMG_URL } from "./api";
import { modalWindow, openModal } from "./modalWindow";

const movies = document.querySelector(".movies");

export function showMovies(data) {
  movies.innerHTML = "";
  data.forEach((movie) => {
    let movieEl = document.createElement("div");

    movieEl.classList.add("movie");
    // Bad practise - need to rewrite. I'll add the idea
    movieEl.innerHTML = `
                <div class="movie__wrapper"><img src="${
                  IMG_URL + movie.poster_path
                }" alt=${movie.title} class="movie__poster"></div>
                <div class="movie__info">
                    <h2 class="movie__info-title">${movie.title}</h2>
                    <div class="movie__info-raiting ${getVoteColor(
                      movie.vote_average
                    )}">${movie.vote_average}</div>
                </div>
    `;

    // Event delegation!!!
    movieEl.addEventListener("click", () => openModal(movie.id));

    movies.append(movieEl);
  });
}
