const db = require('../db/queries')

// Render
async function getHabitats(req, res) {
  try {
    const habitats = await db.getAllHabitats()
    res.render('index', { habitats: habitats })
  } catch (error) {
    res.status(500).send('Server error')
  }
}

async function getCreatures(req, res) {
  try {
    const habitatId = req.params.id
    const habitat = await db.getHabitatById(habitatId)
    const filteredCreatures = await db.getFilteredCreatures(habitatId)

    res.render('habitatPage', {
      creatures: filteredCreatures,
      title: habitat.habitat_name,
    })
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// Creature form actions
async function createCreatureGet(req, res) {
  try {
    const habitats = await db.getAllHabitats()

    res.render('newCreatureForm', { habitats: habitats })
  } catch (error) {
    res.status(500).send('Server error')
  }
}

async function createCreaturePost(req, res) {
  try {
    await db.insertNewCreature(req.body)
    res.redirect('/')
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// Habitat form actions
async function createHabitatGet(req, res) {
  try {
    res.render('newHabitatForm')
  } catch (error) {
    res.status(500).send('Server error')
  }
}

async function createHabitatPost(req, res) {
  try {
    await db.insertNewHabitat(req.body)

    res.redirect('/')
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// Creature delete
async function deleteCreature(req, res) {
  try {
    const { id } = req.params
    await db.deleteCreature(id)
    const referer = req.get('Referer') || '/'
    res.redirect(referer)
  } catch (error) {
    res.status(500).send('Server error')
  }
}

// Habitat delete
async function deleteHabitat(req, res) {
  try {
    const { id } = req.params
    const filteredCreatures = await db.getFilteredCreatures(id)
    if (filteredCreatures.length > 0) {
      await db.deleteAllCreaturesInHabitat(id)
    }

    await db.deleteHabitatById(id)

    const referer = req.get('Referer') || '/'
    res.redirect(referer)
  } catch (error) {
    res.status(500).send('Server error')
  }
}

module.exports = {
  getHabitats,
  getCreatures,
  createCreatureGet,
  createCreaturePost,
  createHabitatGet,
  createHabitatPost,
  deleteCreature,
  deleteHabitat,
}
