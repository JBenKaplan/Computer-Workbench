const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/parts/all', controllers.getAllParts)
router.get('/parts/:id', controllers.getPartById)
router.get('/parts/type/:id', controllers.getPartByType)
router.put('/parts/:id', controllers.updatePart)
router.post('/parts/create', controllers.createPart)
router.delete('/parts/:id', controllers.deletePart)

router.post('/wb/:id', controllers.joinWorkBench)
router.post('/wb/create', controllers.createWorkBench)

module.exports = router
