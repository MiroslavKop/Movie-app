import "../scss/style.scss";
import { getMovies, searchMovies } from "./api";
import { showMovies } from "./showMovies";

let searchForm = document.forms.search;
let { ["search__input"]: searchInput } = searchForm;
let searchIcon = document.querySelector(".search__icon ");
let clearBtn = document.querySelector(".clear");

// getMovies(API_URL);

// function find(inputValue) {
//   if (inputValue) {
//     getMovies(SEARCH_URL + "&query=" + searchInput.value);
//   } else {
//     getMovies(API_URL);
//   }
// }

getMovies().then(showMovies); // Short form of then callback function

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // TODO: try/catch
  const result = await searchMovies(searchInput.value);
  showMovies(result);
  searchForm.reset();
});

searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
});
