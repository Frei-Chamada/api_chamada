import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import con from './repository/connection.js'
import addRoute from './routes.js'

import './utils/global.js'

const server = express()

server.use(express.json())
server.use(cors())

addRoute(server)

server.listen(process.env.PORT, () => console.log(`--> Api rodando na porta: ${process.env.PORT} <--`))