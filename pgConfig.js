const {Pool} = require('pg')
const pool = new Pool({
    connectionString:process.env.DATEBASE_URL,
    ssl: { rejectUnauthorized: false}
})

module.exports.pool = pool