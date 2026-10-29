require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const port = process.env.PORT || 4000;
if (!process.env.MONGO_URI) {
  console.error('Falta configurar MONGO_URI');
  process.exit(1);
}
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`Servidor activo en puerto ${port}`)))
  .catch(error => { console.error('Error de conexión a MongoDB:', error.message); process.exit(1); });
