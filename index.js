// Global variables
const BASE_URL = "http://localhost:3000";
let currentMovie;

// DOM elements
const movieDetails = document.getElementById("movie-details");
const moviePoster = document.getElementById("movie-poster");
const movieTitle = document.getElementById("movie-title");
const movieRuntime = document.getElementById("movie-runtime");
const movieShowtime = document.getElementById("movie-showtime");
const availableTickets = document.getElementById("available-tickets");
const buyTicketButton = document.getElementById("buy-ticket");
const filmsList = document.getElementById("films");

// Fetch movie data from the server
async function fetchMovie(id) {
  const response = await fetch(`${BASE_URL}/films/${id}`);
  const movie = await response.json();
  return movie;
}

// Fetch all movies from the server
async function fetchAllMovies() {
  const response = await fetch(`${BASE_URL}/films`);
  const movies = await response.json();
  return movies;
}

// Display movie details
function displayMovieDetails(movie) {
  currentMovie = movie;
  moviePoster.src = movie.poster;
  movieTitle.textContent = movie.title;
  movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
  movieShowtime.textContent = `Showtime: ${movie.showtime}`;
  const ticketsAvailable = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = `Available Tickets: ${ticketsAvailable}`;
  buyTicketButton.disabled = ticketsAvailable === 0;
}

// Populate the films menu
function populateFilmsMenu(movies) {
  filmsList.innerHTML = "";
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    li.classList.add("film", "item");
    filmsList.appendChild(li);
  });
}

// Buy ticket function
function buyTicket() {
  if (currentMovie.tickets_sold < currentMovie.capacity) {
    currentMovie.tickets_sold++;
    const ticketsAvailable = currentMovie.capacity - currentMovie.tickets_sold;
    availableTickets.textContent = `Available Tickets: ${ticketsAvailable}`;
    buyTicketButton.disabled = ticketsAvailable === 0;
  }
}

// Event listeners
buyTicketButton.addEventListener("click", buyTicket);

// Initialize the app
async function init() {
  const firstMovie = await fetchMovie(1);
  displayMovieDetails(firstMovie);

  const allMovies = await fetchAllMovies();
  populateFilmsMenu(allMovies);
}

// Run the app
init();
