import loginController from './controller/loginController.js'
import classController from './controller/classController.js'

export default function addRoute(server){
    server.use(loginController)
    server.use(classController)
}