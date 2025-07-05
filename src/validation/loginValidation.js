

export function loginValidation(user) {

    if (!user.login)
        throw new Error('O parâmetro de login está incorreto.') 

    if (!user.senha)
        throw new Error('O parâmetro de senha está incorreto.')

}

export function loginValidationRows (resp) {
    if (!resp) 
        throw new Error ("Login não encontrado")
}