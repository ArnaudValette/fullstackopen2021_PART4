const config = require('./utils/config')
const express = require('express')
const app = express()

//not required for the moment
const cors = require('cors')

const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URL)
.then(()=> {
    console.log('MongoDB connection successful !')
}).catch(error => {
    console.log('MongoDB connection refused: ', error.message)
})

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app