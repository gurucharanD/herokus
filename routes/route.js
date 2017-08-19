const express = require('express')
const router = express.Router()
var ObjectId = require('mongodb').ObjectID

const movie = require('../models/movies')
const actor = require('../models/actors')
const director = require('../models/director')

/*---------------------RETRIVE OPERATIONS start here---------------------------------*/

//retrival of movie data with GET()
router.get('/movieslist', (req, res, next) => {
    movie.find((err, movies) => {
        res.json(movies)
    })
})

//retrival of actors data with GET()
router.get('/actorslist', (req, res, next) => {
    actor.find((err, actors) => {
        res.json(actors)
    })
})

//retrival of directors data with GET()
router.get('/directorslist', (req, res, next) => {
    director.find((err, directors) => {
        res.json(directors)
    })
})

/*---------------------RETRIVE OPERATIONS end here---------------------------------*/



/*---------------------CERATE OPERATIONS start here---------------------------------*/


//add movies with POST()
router.post('/addmovie', (req, res, next) => {
    //adding movie to database
    let newMovie = new movie({
        image_url: req.body.image_url,
        movie_name: req.body.movie_name,
        description: req.body.description,
        year: req.body.year,
        rating: req.body.rating,
        actors: req.body.actors,
        directors: req.body.directors
    })
    newMovie.save((err, movie) => {
        if (err) {
            res.json({ msg: 'failed to add movie' })
        } else {
            res.json({ msg: 'added movie successfully' })
        }
    })
})

//add Actor with POST()
router.post('/addactor', (req, res, next) => {
    //adding actor to database
    let newActor = new actor({
        name: req.body.name,
        image_url: req.body.image_url,
        age: req.body.age,
        gender: req.body.gender,
        acted: req.body.acted,

    })
    newActor.save((err, actor) => {
        if (err) {
            res.json({ msg: 'failed to add actor' })
        } else {
            res.json({ msg: 'added actor successfully' })
        }
    })
})

//add director with POST()
router.post('/adddirector', (req, res, next) => {
    //adding director to database
    let newDirector = new director({
        name: req.body.name,
        image_url: req.body.image_url,
        age: req.body.age,
        gender: req.body.gender,
        directed_movies: req.body.directed_movies,

    })
    newDirector.save((err, director) => {
        if (err) {
            res.json({ msg: 'failed to add director' })
        } else {
            res.json({ msg: 'added director successfully' })
        }
    })
})


/*---------------------CREATE OPERATIONS end here---------------------------------*/


/*---------------------DELETE OPERATIONS start here---------------------------------*/



//delete movie with REMOVE()
router.delete('/deletemovie/:id', (req, res, next) => {
    //delete movie from database
    movie.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }

    })
})

//delete director with REMOVE()
router.delete('/deletedirector/:id', (req, res, next) => {
    //delete director from database
    director.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }

    })
})

//delete actor with REMOVE()
router.delete('/deleteactor/:id', (req, res, next) => {
    //delete actor from database
    actor.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }

    })
})

/*---------------------DELETE OPERATIONS end  here---------------------------------*/

/*--------------------UPDATE OPERATIONS START HERE---------------------------------*/

//update movie with put()

router.put('/updatemovie/:id', function(req, res) {

    var movieToUpdate = req.params.id;

    movie.update({ _id: ObjectId(movieToUpdate) }, req.body, function(err, result) {
        res.send(
            (err === null) ? { msg: 'updated successfully' } : { msg: err }
        );
    });

});

//update actor with put()

router.put('/updateactor/:id', function(req, res) {

    var actorToUpdate = req.params.id;

    actor.update({ _id: ObjectId(actorToUpdate) }, req.body, function(err, result) {
        res.send(
            (err === null) ? { msg: 'updated successfully' } : { msg: err }
        );
    });

});

//update actor with put()

router.put('/updatedirector/:id', function(req, res) {

    var directorToUpdate = req.params.id;

    director.update({ _id: ObjectId(directorToUpdate) }, req.body, function(err, result) {
        res.send(

            (err === null) ? { msg: 'updated Dir successfully' } : { msg: err }

        );
    });

});




/*--------------------UPDATE OPERATIONS END HERE---------------------------------*/



module.exports = router