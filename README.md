# Chuck Norris Joke App

A simple web application that generates random Chuck Norris jokes using public APIs and the Fetch API.

## Overview

This project demonstrates basic client side JavaScript concepts including asynchronous requests, API consumption, and DOM manipulation. Each time the user clicks the button, the application fetches a new Chuck Norris joke and a related GIF.

## Features

- Random Chuck Norris jokes fetched from a public API
- Random Chuck Norris GIF displayed with each joke
- Asynchronous requests using Fetch and async await
- Minimal responsive layout using HTML and CSS

## Technologies

- HTML
- CSS
- JavaScript
- Fetch API

## APIs Used

Chuck Norris Jokes API
https://api.chucknorris.io

Klipy GIF API
https://docs.klipy.com

## How It Works

1. The user clicks the Load Another button.
2. JavaScript sends an asynchronous request to the Chuck Norris Joke API.
3. A second request retrieves a Chuck Norris GIF from the Klipy API.
4. The joke text and GIF are inserted into the page dynamically.

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/chuck-norris-joke-app.git
```

Open the project directory

```bash
cd chuck-norris-joke-app
```

Open `index.html` in your browser.

## File Structure

```
/project
 ├─ index.html
 ├─ styles.css
 ├─ main.js
 └─ README.md
```

## Author

Ali Linares
