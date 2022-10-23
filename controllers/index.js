const { Part, WorkBench } = require('../models')

const createWorkBench = async (req, res) => {
  try {
    const workBench = await new WorkBench(req.body)
    await workBench.save()
    return res.status(201).json({
      part
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createPart = async (req, res) => {
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
    console.log(type)
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
  createPart,
  getAllParts,
  getPartById,
  getPartByType,
  updatePart,
  deletePart
}
