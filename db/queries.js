const pool = require('./pool')

async function getAllHabitats() {
  const { rows } = await pool.query('SELECT * FROM habitats')
  return rows
}

async function getAllCreatures() {
  const { rows } = await pool.query('SELECT * FROM creatures')
  return rows
}

async function getFilteredCreatures(id) {
  const { rows } = await pool.query(
    'SELECT * FROM creatures WHERE habitat_id = $1',
    [id]
  )
  return rows
}

async function getHabitatById(id) {
  const { rows } = await pool.query('SELECT * FROM habitats WHERE id = $1', [
    id,
  ])
  return rows[0]
}

async function insertNewCreature({
  habitat_id,
  name,
  nickname,
  class_name,
  speed,
  max_weight,
  lifespan,
  img,
}) {
  const query = `
    INSERT INTO creatures 
    (name, nickname, class_name, speed, max_weight, lifespan, habitat_id, img) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `
  const defaultClassName = class_name || 'Wyvern'
  const defaultSpeed = speed || 220
  const defaultMaxWeight = max_weight || 200
  const defaultLifespan = lifespan || 100
  const defaultImg =
    image || 'https://mythology.net/wp-content/uploads/2017/03/Dragon-Art.jpg'

  const values = [
    name,
    nickname,
    defaultClassName,
    defaultSpeed,
    defaultMaxWeight,
    defaultLifespan,
    habitat_id,
    defaultImg,
  ]

  await pool.query(query, values)
}

async function insertNewHabitat({ habitat_name, superpower, image }) {
  const query = `
    INSERT INTO habitats 
    (habitat_name, superpower, img) 
    VALUES ($1, $2, $3)
  `
  const defaultImg =
    image ||
    'https://images.unsplash.com/photo-1570537548284-360874d866b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZhaXJ5fGVufDB8MHwwfHx8Mg%3D%3D'

  const values = [habitat_name, superpower, defaultImg]

  await pool.query(query, values)
}

async function deleteCreature(id) {
  await pool.query(
    `
    DELETE FROM  creatures
    WHERE id = $1`,
    [id]
  )
}

async function deleteAllCreaturesInHabitat(habitatId) {
  await pool.query(
    `
    DELETE FROM  creatures
    WHERE habitat_id = $1`,
    [habitatId]
  )
}

async function deleteHabitatById(id) {
  // check if there are any creatures, -->  delete creatures

  await pool.query(
    `
    DELETE FROM  habitats
    WHERE id = $1`,
    [id]
  )
}

module.exports = {
  getAllHabitats,
  getAllCreatures,
  getFilteredCreatures,
  getHabitatById,
  insertNewCreature,
  insertNewHabitat,
  deleteCreature,
  deleteAllCreaturesInHabitat,
  deleteHabitatById,
}
