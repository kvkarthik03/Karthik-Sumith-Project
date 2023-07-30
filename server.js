const express = require("express");
// var cors = require("cors")
const app = express();
// app.use(cors())

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)

const port = process.env.PORT || 5000

app.listen(port,() => console.log("Node Server Started using nodemon"));