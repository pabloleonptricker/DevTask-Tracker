# DevTask Tracker

**DevTask Tracker** aplicación FullStack para la gestión de tareas en equipos de ingeniería. 

Este proyecto ha sido desarrollado utilizando estándares web nativos (Vanilla JS) y una arquitectura robusta en el servidor, demostrando el dominio del flujo completo de datos desde la interfaz de usuario hasta la persistencia en base de datos.

---

## Stack Tecnológico

### Frontend (Cliente)
* **HTML5 Semántico:** Estructura limpia y accesible.
* **CSS3:** Diseño responsivo implementado con **CSS Grid** y **Flexbox** (Sin frameworks como Bootstrap).
* **Vanilla JavaScript (ES6+):** Manipulación directa del DOM y consumo de API REST mediante `fetch` y `async/await`.

### Backend (Servidor)
* **Node.js:** Entorno de ejecución de servidor.
* **Express.js:** Framework minimalista para la creación de la API REST.
* **Mongoose:** ODM (Object Data Modeling) para la gestión de esquemas y validación de datos.
* **Dotenv:** Gestión de variables de entorno.
* **CORS:** Middleware para permitir peticiones de origen cruzado.

### Base de Datos
* **MongoDB Atlas:** Base de datos NoSQL en la nube (DaaS).

---

## Requisitos Previos

Para ejecutar este proyecto en local, necesitas tener instalado:

1.  **Node.js** (v14 o superior).
2.  **Git** (para clonar el repositorio).
3.  Una cuenta activa en **MongoDB Atlas** con un Cluster desplegado.

---

## Instalación y Despliegue

Sigue estos pasos secuenciales para arrancar el proyecto:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta:
```bash
git clone [https://github.com/](https://github.com/)[TU_USUARIO]/DevTask-Tracker.git
cd DevTask-Tracker
```

### 2. Instalar dependencias del servidor

```bash
cd backend
npm install
```

### 3. Configuración de las variables de entorno

En /backend crea un archivo .env y añade lo siguiente:

```bash
PORT=3000
# Sustituye la siguiente línea con tu cadena de conexión real de MongoDB Atlas
MONGO_URI=mongodb://usuario:password@cluster...
```
## Ejecución del Proyecto

### 1. Arrancar el backend

Desde la carpeta raíz ejecuta:

```bash
node backend/server.js
```

### 2. Arrancar el Frontend

Abre el archivo index.html ubicado en la carpeta /frontend


## Estructura del Proyecto

/DevTaskTracker
├── /backend            # Lógica del servidor (API)
│   ├── /models         # Esquemas de Mongoose (Task.js)
│   ├── .env            # Variables de entorno (Ignorado por Git)
│   ├── server.js       # Punto de entrada del servidor
│   └── package.json    # Dependencias del proyecto
│
├── /frontend           # Interfaz de usuario (Cliente)
│   ├── index.html      # Estructura HTML
│   ├── style.css       # Estilos CSS Grid/Flex
│   └── app.js          # Lógica JS (Fetch + DOM)
│
├── .gitignore          # Archivos ignorados (node_modules, .env)
└── README.md           # Documentación del proyecto


## Autor

Eduardo Alcaide Rodríguez


