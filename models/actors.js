const mongoose = require('mongoose')

const ActorSchema = mongoose.Schema({
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
    acted: {
        type: Array,
        require: true
    }
})

const Actor = module.exports = mongoose.model('Actors', ActorSchema)