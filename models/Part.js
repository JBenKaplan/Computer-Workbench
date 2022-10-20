const { Schema } = require('mongoose')

const Part = new Schema(
  {
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    details: { type: String },
    misc: { type: String },
    brand: { type: String },
    SKU: { type: String },
    inUse: { type: Boolean },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = Part
