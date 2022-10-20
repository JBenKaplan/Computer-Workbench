const { model } = require('mongoose')
const PartSchema = require('./Part')
const WorkBenchSchema = require('./WorkBench')

const Part = model('Part', PartSchema)
const WorkBench = model('WorkBench', WorkBenchSchema)

module.exports = {
  Part,
  WorkBench
}
