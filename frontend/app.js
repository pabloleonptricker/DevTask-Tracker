// frontend/app.js

// URL de tu Backend (donde está escuchando el servidor)
const API_URL = 'http://localhost:3000/api/tasks';

// Referencias a los elementos del DOM (HTML)
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

/**
 * 1. FUNCIÓN PARA OBTENER Y PINTAR TAREAS (READ)
 * Usa fetch() con async/await para pedir los datos al servidor.
 */
async function fetchTasks() {
    try {
        // Hacemos la petición GET al servidor
        const response = await fetch(API_URL);
        const tasks = await response.json();

        // Limpiamos la lista actual para no duplicar
        taskList.innerHTML = '';

        // Recorremos las tareas y creamos el HTML para cada una
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            // Inyectamos el HTML dinámicamente
            li.innerHTML = `
                <div class="task-info">
                    <h3>${task.titulo}</h3>
                    <small>${task.tecnologia}</small>
                </div>
                <button class="btn-delete" onclick="deleteTask('${task._id}')">
                     Borrar
                </button>
            `;
            
            taskList.appendChild(li);
        });

    } catch (error) {
        console.error('Error cargando tareas:', error);
        alert('Error al conectar con el servidor. ¿Está encendido?');
    }
}

/**
 * 2. FUNCIÓN PARA CREAR UNA TAREA (CREATE)
 * Escucha el evento 'submit' del formulario.
 */
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue (SPA)

    // Capturamos los datos de los inputs
    const titulo = document.getElementById('title').value;
    const tecnologia = document.getElementById('tech').value;

    const newTask = {
        titulo: titulo,
        tecnologia: tecnologia,
        estado: false // Por defecto pendiente
    };

    try {
        // Enviamos los datos al servidor con POST
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Decimos que enviamos JSON
            },
            body: JSON.stringify(newTask)
        });

        // Limpiamos el formulario y recargamos la lista
        taskForm.reset();
        fetchTasks(); 

    } catch (error) {
        console.error('Error creando tarea:', error);
    }
});

/**
 * 3. FUNCIÓN PARA ELIMINAR UNA TAREA (DELETE)
 * Se llama desde el botón de borrar que creamos arriba.
 */
async function deleteTask(id) {
    if (!confirm('¿Seguro que quieres eliminar esta tarea?')) return;

    try {
        // Enviamos petición DELETE con el ID específico
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        // Recargamos la lista para ver que desapareció
        fetchTasks();

    } catch (error) {
        console.error('Error borrando tarea:', error);
    }
}

// Cargar las tareas nada más entrar a la web
document.addEventListener('DOMContentLoaded', fetchTasks);