require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get("/", (req,res) => {
    console.log("Home Route accessed!")
    res.send("Hello World!")
})

app.get("/twitter", (req,res) => {
    console.log("Twitter Route accessed!")
    res.send("Saksham-Jaiswal-2004")
})

app.get("/login", (req,res) => {
    console.log("Login Route accessed!")
    res.send("<h1>Please login - By Saksham Jaiswal</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})