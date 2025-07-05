import loginController from './controller/loginController.js'

export default function addRoute(server){
    server.use(loginController)
}