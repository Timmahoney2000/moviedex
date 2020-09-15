require('dotenv').config()
const movies = require('./movies-data-small')
const express = require('express')
const morgan = require('morgan')
console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

function handleGetMovies(req, res) {
    const validTypes = ['filmtv_ID', 'film_title', 'year', 'genre', 'duration', 'country', 'director', 'actors', 'avg_vote', 'votes']

    function handleGetMovies(req, res) {
        res.json
    }
}

app.get('/movies', handleGetMovies)

function handleGetMovieGetMovies(req, res) {
    res.send('Hello, Movies!')
}

app.get('movies', handleGetMovies)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
