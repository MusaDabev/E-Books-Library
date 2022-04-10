const express = require('express');
const mongoose = require('mongoose')
const router = require('./Routes/book-routes.js')
const cors = require('cors')

const app = express();

// Middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router);

app.use('/', (req, res, next) => {
    res.send('This is our app')
})


mongoose.connect("mongodb+srv://admin:admin9807@book-store.bphsh.mongodb.net/book-store?retryWrites=true&w=majority")
.then(()=> {
    console.log("Connected to database");
}).then (() => {
    app.listen(5000, () => console.log("Listen on port 5000"))
})
.catch((err) => console.log(err))
