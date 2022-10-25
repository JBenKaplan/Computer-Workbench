const { Part, WorkBench } = require('../models')

//Workbench controllers
const createWorkBench = async (req, res) => {
  req.body.budget = parseInt(req.body.budget)
  try {
    const workBench = await new WorkBench(req.body)
    await workBench.save()
    return res.status(201).json({
      workbench
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const showWorkBench = async (req, res) => {
  try {
    const { id } = req.params
    const bench = await WorkBench.findById(id)
    if (bench) {
      return res.status(200).json({ parts })
    }
    return res
      .status(404)
      .send('Workbench with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const showPartsInBench = async (req, res) => {
  try {
    const { id } = req.params
    const bench = await WorkBench.findById(id).populate('parts')
    if (bench) {
      return res.status(200).json({ parts })
    }
    return res
      .status(404)
      .send('Workbench with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllBenches = async (req, res) => {
  try {
    const benches = await WorkBench.find()
    return res.status(200).json({ benches })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBench = async (req, res) => {
  try {
    const { id } = req.params
    const bench = await WorkBench.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ bench })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBench = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await WorkBench.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Workbench deleted')
    }
    throw new Error('Workbench not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

///Part Controllers
const createPart = async (req, res) => {
  req.body.price = parseInt(req.body.price)
  console.log(req.body)
  try {
    const part = await new Part(req.body)
    await part.save()
    return res.status(201).json({
      part
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//add part to workbench by push method here
const addPartToBench = async (req, res) => {
  try {
    const bench = await WorkBench.findByIdAndUpdate(
      '6356b1f3e18d46f8e2f1ed61',
      { $push: { parts: req.params.part_id } }
    )
    await bench.save()
    return res.status(201).json({
      bench
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllParts = async (req, res) => {
  try {
    const parts = await Part.find()
    return res.status(200).json({ parts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPartById = async (req, res) => {
  try {
    const { id } = req.params
    const part = await Part.findById(id)
    if (part) {
      return res.status(200).json({ part })
    }
    return res.status(404).send('Part with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPartByType = async (req, res) => {
  try {
    const type = req.params
    const part = await Part.find({ type: type.id.toUpperCase() })
    if (part) {
      return res.status(200).json({ part })
    }
    return res.status(404).send('Part with the specified TYPE does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePart = async (req, res) => {
  try {
    const part = await Part.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(part)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePart = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Part.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Part deleted')
    }
    throw new Error('Part not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createWorkBench,
  showPartsInBench,
  showWorkBench,
  getAllBenches,
  updateBench,
  deleteBench,
  createPart,
  addPartToBench,
  getAllParts,
  getPartById,
  getPartByType,
  updatePart,
  deletePart
}
