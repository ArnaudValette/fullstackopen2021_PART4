const express = require('express')
const app = express()
const blogsRouter = require('./controllers/blogs')
app.use(express.json())
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const config = require('./utils/config')

logger.info('Connecting to mongoDB')

mongoose.connect(config.MONGODB_URL).then(()=>{
    logger.info("connected to mongoDB")
}).catch(error => {
    logger.error("Not connected to mongoDB", error.message)
})

app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



    


module.exports= app