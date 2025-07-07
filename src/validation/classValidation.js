
export default function classValidation(teacherId){
    if(!teacherId)
        throw new Error ('Parâmetro de Id do professor inválido.')
}