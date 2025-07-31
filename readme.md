
# TuristikApp

> 💡 **Nota** Entrega de portafolio para el instituto DuocUc

> 💬 **Resumen del proyecto** Se generó este proyecto con el fin de ayudar a las personas con alguna discapacidad visual o de atención.\
> Se usaron tecnologías como React, TypeScript, Tailwind e inteligencia artificial (Gemini) para el front-end.\
> Para el back-end se utilizó Firebase (NoSQL), TypeScript y Node.js.\
> Además, se integraron librerías personalizadas.

> ⚠️ **Precaución** Se necesita tener acceso a la base de datos de Firebase para ejecutar correctamente el proyecto, ya que toda la información se aloja ahí.

> 📌 **Importante** Este proyecto ya está dado de baja debido al nulo uso de los servicios de Gemini y Firebase hasta la fecha (30/07/2025).

> 🚨 **Advertencia** En caso de querer ejecutar o modificar el código, será necesario usar una versión de React con Vite e instalar Tailwind v3.\
> Para la IA, se deberá generar un token para interactuar con Gemini desde la aplicación web.

> 📂 **Visualización del trabajo** En el archivo `.ppt` se podrá ver mejor el trabajo mediante videos y capturas de pantalla.

---

## 🗂️ Estructura del Proyecto

```bash
TuristikApp/
├── front-end/                   # Cliente (React, TypeScript, Tailwind, Gemini)
│   ├── node_modules/           # Dependencias
│   ├── public/                 # Archivos estáticos
│   │   └── images/            # Imágenes utilizadas
│   ├── src/                    # Código fuente
│   │   ├── api/               # Servicios de red
│   │   ├── assets/            # Recursos (imágenes, logos, etc.)
│   │   │   └── react.svg
│   │   ├── components/        # Componentes reutilizables
│   │   │   ├── ChatHistory/   # Historial del chat IA
│   │   │   ├── Loading/       # Indicador de carga
│   │   │   ├── Footer.tsx
│   │   │   ├── Form.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── chat.tsx
│   │   ├── hooks/             # Hooks personalizados
│   │   ├── locales/           # Archivos de traducción i18n
│   │   ├── pages/             # Páginas del sitio
│   │   ├── routes/            # Rutas definidas
│   │   ├── services/          # Servicios (Firebase, IA, etc.)
│   │   ├── styles/            # Estilos CSS/Tailwind
│   │   ├── test/              # Pruebas
│   │   ├── types/             # Tipos TypeScript
│   │   ├── utils/             # Utilidades varias
│   │   ├── App.tsx            # Componente raíz
│   │   ├── i18n.ts            # Configuración de traducción
│   │   ├── index.css          # CSS global
│   │   ├── main.tsx           # Punto de entrada principal
│   │   └── vite-env.d.ts
│   ├── .eslintrc.json
│   ├── jest.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig*.json
│   ├── vite.config.ts
│   └── package.json
└── back-end/                   # Servidor (Node.js, Express, Firebase Admin)
    ├── node_modules/
    ├── src/
    │   ├── config/            # Configuraciones del servidor
    │   ├── controllers/       # Lógica de negocio
    │   ├── middlewares/       # Middleware Express
    │   ├── models/            # Modelos de datos (Firebase)
    │   ├── routes/            # Endpoints de la API
    │   ├── services/          # Servicios auxiliares
    │   ├── utils/             # Utilidades generales
    │   └── keyProyecto.json   # Clave privada Firebase
    ├── tests/                 # Pruebas del back-end
    ├── .eslintrc.json
    ├── jest.config.js
    ├── tsconfig.json
    ├── package*.json
```

---

## ▶️ Comandos para Ejecutar el Proyecto

### 🚀 Front-End (React + Vite + TypeScript)

```bash
cd TuristikApp/front-end
npm install     # Instala las dependencias
npm run dev     # Inicia Vite en modo desarrollo
```

Esto levantará la app en `http://localhost:5173` (o el puerto que asigne Vite).

---

### 🚀 Back-End (Node.js + Express + TypeScript)

```bash
cd TuristikApp/back-end
npm install     # Instala las dependencias
npm run dev     # Inicia el servidor con nodemon
```

Servidor disponible en `http://localhost:3000` (por defecto).

---

## 📄 Resumen de Comandos

| Ubicación   | Acción                | Comando       |
| ----------- | --------------------- | ------------- |
| `front-end` | Instalar dependencias | `npm install` |
|             | Iniciar desarrollo    | `npm run dev` |
| `back-end`  | Instalar dependencias | `npm install` |
|             | Iniciar desarrollo    | `npm run dev` |
