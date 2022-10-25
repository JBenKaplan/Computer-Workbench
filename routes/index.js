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

router.get('/wb/all', controllers.getAllBenches)
router.put('/wb/:id/:part_id', controllers.addPartToBench)
router.put('/wb/:id/:part_id', controllers.removePartFromBench)
router.get(`/wb/:id`, controllers.showPartsInBench)
router.post('/wb/create', controllers.createWorkBench)
router.put('/wb/:id', controllers.updateBench)
router.delete('/wb/:wb_id', controllers.deleteBench)

module.exports = router
