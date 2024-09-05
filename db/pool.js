require('dotenv').config()
console.log('Database URL:', process.env.DATABASE_URL)
const { Pool } = require('pg')

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})
