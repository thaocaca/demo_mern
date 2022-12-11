const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  createDate: { type: Date, require: true },
  productCode: { type: String, require: true },
  name: { type: String, require: true },
  type: { type: String, require: true },
  cost: { type: Number, required: true, default: 0 },
  amount: { type: Number, require: true, default: 0 },
  status: { type: Boolean, require: true, default: true },
});


module.exports = mongoose.model("product", productSchema);

