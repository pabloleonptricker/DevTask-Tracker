// backend/models/Task.js
const mongoose = require('mongoose');

// Definimos el esquema (la estructura de los datos)
const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true // Obligatorio según el PDF
  },
  tecnologia: {
    type: String,
    enum: ['Java', 'JavaScript', 'Python', 'HTML/CSS', 'Otro'],
    default: 'Otro'
  },
  estado: {
    type: Boolean, // false = Pendiente, true = Completada
    default: false
  },
  fecha: {
    type: Date,
    default: Date.now // Se pone la fecha actual automáticamente
  }
});

// Exportamos el modelo para que server.js pueda usarlo
module.exports = mongoose.model('Task', taskSchema);