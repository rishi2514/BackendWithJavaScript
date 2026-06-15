require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/hello', (req, res) => {
    res.send("Welcome to my world!")
})

app.listen(port, () => {
    console.log(`Server is runnning on port ${port}`)
})