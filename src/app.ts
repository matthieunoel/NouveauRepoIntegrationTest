import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
const express = require('express')

const app = createExpressServer({
    cors: true
})

app.use('/', express.static('src/static'))

app.listen(5000, '127.0.0.1')