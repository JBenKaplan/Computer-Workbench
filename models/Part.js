const { Schema } = require('mongoose')

const Part = new Schema(
  {
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    details: { type: String },
    brand: { type: String },
    SKU: { type: String },
    inUse: { type: Boolean },
    image: { type: String },
    workbench_id: { type: Schema.Types.ObjectId, ref: 'WorkBench' }
  },
  { timestamps: true }
)

module.exports = Part
