const { Schema } = require('mongoose')

const WorkBench = new Schema(
  {
    budget: { type: Number, required: true },
    owner: { type: String, required: true },
    dateStarted: { type: String, required: true },
    goalDate: { type: String, required: true },
    parts: [{ type: Schema.Types.ObjectId, ref: 'Part' }]
  },
  { timestamps: true }
)

module.exports = WorkBench
