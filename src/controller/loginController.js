import { loginService } from "../service/loginService.js";
import { loginValidation } from "../validation/loginValidation.js";

import { Router } from "express";

const endpoints = Router()

endpoints.post('/login', async (req, resp) => {
    try {
        const user = req.body
        loginValidation(user)
        let response = await loginService(user)
        resp.send({
            response: response
        })
        
    } catch (err) {
        resp.status(400).send(createError(err))
    }
})

export default endpoints;