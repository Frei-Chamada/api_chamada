import con from "./connection.js";


export async function consultClasses (teacherId) {
    let command = `
        SELECT 
            MDP.ID_MODULO_DISCIPLINA_PROFESSOR,
            TUR.ID_TURMA,
            TUR.NM_TURMA,
            TUR.TP_PERIODO,
            DIS.NM_DISCIPLINA
        FROM TB_MODULO_DISCIPLINA_PROFESSOR AS MDP
            LEFT JOIN TB_TURMA AS TUR ON TUR.ID_TURMA = MDP.ID_TURMA
            LEFT JOIN TB_MODULO_DISCIPLINA AS MDI ON MDI.ID_MODULO_DISCIPLINA = MDP.ID_MODULO_DISCIPLINA
            LEFT JOIN TB_DISCIPLINA AS DIS ON DIS.ID_DISCIPLINA = MDI.ID_DISCIPLINA
        WHERE ID_PROFESSOR = @TEACHERID
    `
    const resp = await con
        .request()
        .input("teacherId", teacherId)
        .query(command)

    return resp.recordset
}
