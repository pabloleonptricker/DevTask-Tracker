// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importamos el modelo que acabas de crear
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

// --- MIDDLEWARES ---
app.use(cors()); // Permite que el Frontend (puerto distinto) nos hable
app.use(express.json()); // Permite entender los datos JSON que nos envíen

// --- CONEXIÓN BASE DE DATOS ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// --- RUTAS API (ENDPOINTS) ---

// 1. GET: Obtener todas las tareas
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Busca todo en la BD
    res.json(tasks); // Devuelve el array de tareas en JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// 2. POST: Crear una nueva tarea
app.post('/api/tasks', async (req, res) => {
  try {
    // Creamos la tarea con los datos que vienen del Frontend (req.body)
    const newTask = new Task(req.body);
    await newTask.save(); // Guardar en MongoDB Atlas
    res.status(201).json(newTask); // 201 significa "Creado con éxito"
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar la tarea' });
  }
});

// 3. DELETE: Eliminar una tarea por su ID
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params; // Sacamos el ID de la URL
    await Task.findByIdAndDelete(id); // Borramos de la BD
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

// --- ARRANCAR SERVIDOR ---
app.listen(port, () => {
  console.log(`🚀 Servidor listo en http://localhost:${port}`);
});