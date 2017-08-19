const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    movie_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    actors: {
        type: Array,
        required: true
    },
    directors: {
        type: Array,
        required: true
    }
})

const Movie = module.exports = mongoose.model('Movie', MovieSchema)