// Global variables
let currentMovie;

// DOM Elements
const movieDetails = document.getElementById('movie-details');
const filmsList = document.getElementById('films');
const buyTicketButton = document.getElementById('buy-ticket');

// Fetch first movie and all movies
document.addEventListener('DOMContentLoaded', () => {
  fetchFirstMovie();
  fetchAllMovies();
});

// Fetch and display first movie
function fetchFirstMovie() {
  fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(movie => {
      currentMovie = movie;
      displayMovieDetails(movie);
    });
}

// Fetch and display all movies
function fetchAllMovies() {
  fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(movies => {
      displayMoviesList(movies);
    });
}

// Display movie details
function displayMovieDetails(movie) {
  // Update the movie-details element with movie information
  // Calculate and display available tickets
}

// Display movies list
function displayMoviesList(movies) {
  // Clear existing list items
  filmsList.innerHTML = '';
  
  // Create and append new list items for each movie
}

// Buy ticket function
function buyTicket() {
  if (currentMovie.tickets_sold < currentMovie.capacity) {
    currentMovie.tickets_sold++;
    displayMovieDetails(currentMovie);
  }
  
  if (currentMovie.tickets_sold === currentMovie.capacity) {
    buyTicketButton.disabled = true;
    buyTicketButton.textContent = 'Sold Out';
  }
}

// Add event listener to Buy Ticket button
buyTicketButton.addEventListener('click', buyTicket);