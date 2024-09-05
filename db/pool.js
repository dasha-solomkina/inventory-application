require('dotenv').config()

const { Pool } = require('pg')

module.exports = new Pool({
  host: 'meticulous-empathy.railway.internal',
  user: 'postgres',
  database: 'railway',
  password: 'rGLsYgqbNOpVGPluWMDNxaNdFjigfHrt',
  port: 5432,
})
