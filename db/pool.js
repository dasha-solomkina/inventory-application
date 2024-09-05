require('dotenv').config()

const { Pool } = require('pg')

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Railway's SSL configuration
  },
})
