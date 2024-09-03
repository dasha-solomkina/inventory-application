const { Router } = require('express')
const indexRouter = Router()
const habitatController = require('../controllers/habitatControllers')

indexRouter.get('/', habitatController.getHabitats)
indexRouter.get('/new-habitat', habitatController.createHabitatGet)
indexRouter.post('/new-habitat', habitatController.createHabitatPost)

indexRouter.get('/new', habitatController.createCreatureGet)
indexRouter.post('/new', habitatController.createCreaturePost)

indexRouter.get('/:id', habitatController.getCreatures)

indexRouter.post('/creature/:id/delete', habitatController.deleteCreature)
indexRouter.post('/:id/delete', habitatController.deleteHabitat)

module.exports = indexRouter
