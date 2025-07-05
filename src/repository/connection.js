import sql from 'mssql'
import 'dotenv/config.js'

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PWD,
  server: process.env.SQL_HOST, 
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: false, // true para Azure
    trustServerCertificate: true // necessário para desenvolvimento local
  }
}

const con = await sql.connect(config)

try {
  const con = await sql.connect(config)
  console.log('-->   Banco de Dados rodando   <--')
} catch (err) {
  console.error('Erro ao conectar no SQL Server:', err)
}

export default con