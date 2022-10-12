// TODO: Need to refactor this part too
// 1. Separate request to api module
// 2. Remove the HTML as a string saving
export { modalWindow, openModal };
import { IMG_URL, getMovieById } from "./api";

let modalWindow = document.querySelector(".modal");

function openModal(id) {
  getMovieById(id)
    .then((result) => {
      let movieYear = new Date(result.release_date).getFullYear();
      modalWindow.classList.add("modal__show");
      modalWindow.innerHTML = `    
  <div class="modal__card">
    <div class="modal__block">
      <div class="modal__poster"><img src=${
        IMG_URL + result.poster_path
      } alt="">
      </div>
      <div class="modal__info">
        <h2 class="modal__info-title">${result.title}</h2>
        <h4 class="modal__info-tagline">${result.tagline}</h4>
        <p class="modal__info-overview">${result.overview}</p>
        <ul class="modal__content-info">
          <li><strong>Genres: </strong>${result.genres.map(
            (genre) => ` ${genre.name}`
          )} </li>
          <li><strong>Year: </strong>${movieYear}</li>
          <li><strong>Runtime: </strong>${result.runtime} min</li>
        </ul>
      </div>
    </div>
    <button class="modal__button">CLOSE</button>
  </div>
    `;
      let modalBtn = document.querySelector(".modal__button");
      modalBtn.addEventListener("click", closeModal);
    })
    .catch((error) => console.error(error));
}

function closeModal() {
  modalWindow.classList.remove("modal__show");
}

window.addEventListener("click", (event) => {
  if (event.target === modalWindow) {
    closeModal();
  }
});
