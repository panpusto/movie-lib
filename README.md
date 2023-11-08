# **Movies Library**
This app allows users to search movies, saves it to watchlist and marks it as 'watched'. More features in development.
App uses external API(**OMDb API**)
---
## Contents
* [Technologies used](#technologies-used)
* [Features implemented](#features-implemented)
* [How to start project locally](#how-to-start-project-locally)
* [URLs](#urls)
* [Features planned to implement](#features-planned-to-implement)


## **Technlogies used**
- React
- react-redux
- react-router-dom
- redux-persist
- redux-thunk


## **Features implemented**
- searching movies by title
- adding movies to watchlist and already watched list
- added movies are saving to localStorage, so list is persisted even if you close the browser
- displaying movie details after clicking on movie title


## **How to start project locally**
You should've installed node on your machine to run project locally.
Recommend node version 16.0 for that.

1. Clone this repo
2. Change directory to repo root folder
3. Run `npm start`
4. Now you can visit: `127.0.0.1:3000`

## **URLs**
- Main Page http://localhost:3000
- Watchlist http://localhost:3000/watchlist
- Watched http://localhost:3000/watched

## **Features planned to implement**
- rating movies; rated movies should be automatically added to 'watched' list
- fallback elements during loading data for movie details view
- smoother rendering of components with fetched data
