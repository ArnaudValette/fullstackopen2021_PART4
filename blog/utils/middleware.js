const logger = require('./logger')



const requestLogger = (request, response, next) => {
    logger.info(`${request.method} -- ${request.path} -- ${request.body} ---`)
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint !!!'})
}

module.exports= {
    errorHandler,
    requestLogger,
    unknownEndpoint
}