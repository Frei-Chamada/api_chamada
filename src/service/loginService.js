import * as bd from "../repository/loginRepository.js"
import { loginValidationRows } from "../validation/loginValidation.js"

export async function loginService (user) {
    let resp = await bd.loginRepository(user)
    loginValidationRows(resp)
    return resp
}