const mongoose = require('mongoose')

const DirectorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image_url: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    directed_movies: {
        type: Array,
        require: true
    }
})

const Director = module.exports = mongoose.model('Director', DirectorSchema)