const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://karthik:karthik%40123@cluster0.pr1xfqg.mongodb.net/Hotel-booking'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on("error", () => {
    console.log("MongoDB Connection Failed")
})

connection.on('connected', () => {
    console.log("MongoDB Connection Successful")
})

module.exports = mongoose
