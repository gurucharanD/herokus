//import required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use(logerrors)

const app = express()

const route = require('./routes/route')

//Mongo-Db connection 
mongoose.connect('mongodb://localhost:27017/contactlist')

//Db connection success
mongoose.connection.on('connected', () => {
    console.log('connected to db at port:27017')
})

//Db connection failure
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('ERROR:', err)
    }
})

//Port
const port = process.env.PORT||3000

//adding middleware
app.use(cors())
app.use(bodyparser.json())

//adding static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', route)



app.listen(port, () => {
    console.log("server running")
})

function logerrors(err, req, res, next) {
    res.status(500)
    console.log(" ERROR raised: " + err)
}
