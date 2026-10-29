const mongoose = require('mongoose');
const crearCrud = Modelo => ({
  listar: async (req, res, next) => {
    try { res.json(await Modelo.find().sort({ createdAt: -1 })); } catch (error) { next(error); }
  },
  obtener: async (req, res, next) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ mensaje: 'Identificador inválido' });
      const registro = await Modelo.findById(req.params.id);
      if (!registro) return res.status(404).json({ mensaje: 'Registro no encontrado' });
      res.json(registro);
    } catch (error) { next(error); }
  },
  crear: async (req, res, next) => {
    try { res.status(201).json(await Modelo.create(req.body)); } catch (error) { next(error); }
  },
  actualizar: async (req, res, next) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ mensaje: 'Identificador inválido' });
      const registro = await Modelo.findById(req.params.id);
      if (!registro) return res.status(404).json({ mensaje: 'Registro no encontrado' });
      const permitidos = Object.keys(Modelo.schema.paths).filter(c => !['_id', 'createdAt', 'updatedAt', '__v'].includes(c));
      for (const campo of permitidos) if (Object.prototype.hasOwnProperty.call(req.body, campo)) registro[campo] = req.body[campo];
      await registro.save();
      res.json(registro);
    } catch (error) { next(error); }
  },
  eliminar: async (req, res, next) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ mensaje: 'Identificador inválido' });
      const registro = await Modelo.findByIdAndDelete(req.params.id);
      if (!registro) return res.status(404).json({ mensaje: 'Registro no encontrado' });
      res.json({ mensaje: 'Registro eliminado correctamente', registro });
    } catch (error) { next(error); }
  }
});
module.exports = crearCrud;
