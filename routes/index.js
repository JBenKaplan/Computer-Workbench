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

router.put('/wb/:id', controllers.updateBench)
router.get('/wb/all', controllers.getAllBenches)
router.put('/wb/:id/:part_id/remove', controllers.removePartFromBench)
router.put('/wb/:id/:part_id', controllers.addPartToBench)
router.get(`/wb/:id`, controllers.showPartsInBench)
router.post('/wb/create', controllers.createWorkBench)
router.delete('/wb/:id', controllers.deleteBench)

module.exports = router
