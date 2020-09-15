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

app.use(function validateBearerToken(req, res, next) {
    console.log('validate bearer token middleware')
    debugger
    //move to next middleware
    next()
})

function handleGetMovies(req, res) {
    res.send('Hello, Movies!')
}

app.get('/movies', (req, res)=> {
    const {search = " ", sort} = req.query;

    if(sort){
        if(!['filmtv_ID', 'film_title', 'year', 'genre', 'duration', 'country', 'director', 'actors', 'avg_vote', 'votes'].includes(sort)){
            return res.status(400)
            .send('Sort must be one of the title or ID');
        }
    }

    let results = movies
    .filter(movie =>
        movie
            .film_title
            .toLowerCase()
            .includes(search.toLowerCase()));

            if(sort){
                results.sort((a, b) => {
                    return a[sort] > v[sort] ? 1 : a[sort] < b[sort] ? -1 :0;
                })
            }

            res.json(results);
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
