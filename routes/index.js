const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/parts', controllers.getAllParts)

router.post('/parts', controllers.createPart)

router.post('/wb', controllers.createWorkBench)

router.get('/parts/:id', controllers.getPartById)

router.put('/parts/:id', controllers.updatePart)

router.delete('/parts/:id', controllers.deletePart)

module.exports = router
