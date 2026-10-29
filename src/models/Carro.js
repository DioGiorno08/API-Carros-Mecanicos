const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  marca: { type: String, required: true, trim: true },
  modelo: { type: String, required: true, trim: true },
  año: { type: Number, required: true, min: 1886, max: 2100 },
  color: { type: String, required: true, trim: true },
  placa: { type: String, required: true, trim: true, uppercase: true, unique: true }
}, { timestamps: true, versionKey: false });
module.exports = mongoose.model('Carro', schema);
