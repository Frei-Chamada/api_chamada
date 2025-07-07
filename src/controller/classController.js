import classValidation from "../validation/classValidation.js"
import { consultClasses } from "../service/classService.js"

import { Router } from "express"

const endpoints = Router()

endpoints.get('/turmas/:teacherId', async (req, resp) => {
    try {
        const teacherId = req.params.teacherId
        classValidation(teacherId)
        const response = await consultClasses(teacherId)
        resp.send({
            response: response
        })
    } catch (err) {
        resp.status(400).send(
            createError(err)
        )
    }
})


export default endpoints