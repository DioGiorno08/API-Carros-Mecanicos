const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  apellido: { type: String, required: true, trim: true },
  especialidad: { type: String, required: true, trim: true },
  telefono: { type: String, required: true, trim: true },
  añosExperiencia: { type: Number, required: true, min: 0, max: 80 }
}, { timestamps: true, versionKey: false });
module.exports = mongoose.model('Mecanico', schema);
