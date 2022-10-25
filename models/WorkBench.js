const { Schema } = require('mongoose')

const WorkBench = new Schema(
  {
    owner: { type: String, required: true },
    budget: { type: Number },
    image: { type: String, required: true },
    parts: [{ type: Schema.Types.ObjectId, ref: 'Part' }]
  },
  { timestamps: true }
)

module.exports = WorkBench
