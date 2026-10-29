const router = require('express').Router();
const crud = require('../controllers/crud')(require('../models/Mecanico'));
router.route('/').get(crud.listar).post(crud.crear);
router.route('/:id').get(crud.obtener).put(crud.actualizar).delete(crud.eliminar);
module.exports = router;
