import express from 'express'
import cors from 'cors'
import addRoute from './routes.js'
import con from './repository/connection.js'
import 'dotenv/config'

const server = express()
server.use(express.json())
server.use(cors())

addRoute(server)

server.listen(process.env.PORT, () => console.log(`--> Api rodando na porta: ${process.env.PORT} <--`))