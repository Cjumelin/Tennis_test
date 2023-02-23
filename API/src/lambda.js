const awsLambdaFastify = require('@fastify/aws-lambda')
const app = require('./app')

const proxy = awsLambdaFastify(app)
// or
// const proxy = awsLambdaFastify(app, { binaryMimeTypes: ['application/octet-stream'], serializeLambdaArguments: false /* default is true */ })

exports.handler = proxy