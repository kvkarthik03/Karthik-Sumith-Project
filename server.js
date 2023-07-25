
const express = require("express");

const app = express()


const port = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.sendFile(__dirname+"./src/App.jsx")
})
app.listen(port, () => console.log("Node Server Started"));