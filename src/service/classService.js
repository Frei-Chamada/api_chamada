import * as bd from "../repository/classRepository.js"

export async function consultClasses(teacherId){
    const resp = await bd.consultClasses(teacherId)

    if(!resp)
        throw new Error ('Erro ao executar.')

    return resp
}