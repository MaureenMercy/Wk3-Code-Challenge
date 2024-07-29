# Flatdango

Flatdango is a simple web application that allows users to view movie details and purchase tickets. The project is built using HTML, CSS, and JavaScript, and it interacts with a JSON server to fetch and display movie data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MaureenMercy/Wk3-Code-Challenge.git
   cd flatdango
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server:
   ```bash
   npm run server
   ```

4. Open `index.html` in your preferred web browser to view the application.

## Usage

- Upon loading the application, the details of the first movie will be displayed.
- The sidebar lists all available movies. Click on a movie title to view its details.
- To purchase a ticket, click the "Buy Ticket" button. The number of available tickets will be updated accordingly.

## Project Structure

```
flatdango/
├── index.html
├── index.css
├── index.js
├── db.json
└── package.json
```

- `index.html`: The main HTML file that contains the structure of the web application.
- `index.css`: The CSS file for styling the application.
- `index.js`: The JavaScript file that contains the logic for fetching and displaying movie data, and handling ticket purchases.
- `db.json`: A mock database file used by the JSON server to provide movie data.
- `package.json`: Contains project metadata and dependencies.

## Features

- **View Movie Details**: Displays detailed information about each movie, including the poster, title, runtime, showtime, and available tickets.
- **Purchase Tickets**: Allows users to buy tickets for a movie. The number of available tickets is updated in real-time.
- **Movie List**: Lists all available movies in a sidebar. Users can click on any movie to view its details.

## Dependencies

- [json-server](https://www.npmjs.com/package/json-server): Used to create a mock REST API for the movie data.
- Various other dependencies as listed in the `package.json` file for server and application functionality.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.