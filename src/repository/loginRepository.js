import con from "./connection.js";

export async function loginRepository(user) {
    const command = `
        SELECT 
            id_login,
            ds_login,
            ds_senha
        FROM tb_login
        WHERE ds_login = @login AND ds_senha = @senha
    `;

    const resp = await con
        .request()
        .input("login", user.login)
        .input("senha", user.senha)
        .query(command);

    return resp.recordset[0]
}
