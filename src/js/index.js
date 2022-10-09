import "../scss/style.scss";
import {API_KEY, BASE_URL, API_URL, IMG_URL, SEARCH_URL, getMovies} from "./api";


let searchForm = document.forms.search;
let {["search__input"]: searchInput} = searchForm;
let searchIcon = document.querySelector(".search__icon ");
let clearBtn = document.querySelector(".clear");

getMovies(API_URL);

function find(inputValue) {
    if (inputValue) {
        getMovies(SEARCH_URL + "&query=" + searchInput.value);
    } else {
        getMovies(API_URL);
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    find(searchInput.value);
    searchForm.reset();
});

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("active");
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
});



