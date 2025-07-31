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

TuristikApp/
├── front-end/                        # Aplicación web (interfaz de usuario)
│   ├── node_modules/                # Dependencias de front-end
│   ├── public/                      # Archivos públicos (HTML, imágenes)
│   │   └── images/                  # Imágenes utilizadas en la aplicación
│   ├── src/                         # Código fuente principal
│   │   ├── api/                     # Llamadas a APIs externas
│   │   ├── assets/                  # Archivos estáticos (logos, fuentes)
│   │   │   └── react.svg            # Icono React utilizado en la interfaz
│   │   ├── components/              # Componentes reutilizables de UI
│   │   │   ├── ChatHistory/         # Muestra historial de interacciones con el chatbot
│   │   │   ├── Loading/             # Indicador de carga para acciones asincrónicas
│   │   │   ├── Footer.tsx           # Pie de página común
│   │   │   ├── Form.tsx             # Formulario de entrada de datos
│   │   │   ├── Header.tsx           # Encabezado de la aplicación
│   │   │   ├── Timeline.tsx         # Línea de tiempo para mostrar progreso
│   │   │   └── chat.tsx             # Componente principal del chatbot
│   │   ├── hooks/                   # Hooks personalizados (lógica reutilizable)
│   │   ├── locales/                 # Archivos de traducción (i18n)
│   │   ├── pages/                   # Páginas del sitio (rutas principales)
│   │   ├── routes/                  # Configuración de rutas (dinámicas o estáticas)
│   │   ├── services/                # Servicios que conectan con Firebase y otras APIs
│   │   ├── styles/                  # Estilos CSS / Tailwind / SCSS
│   │   ├── test/                    # Pruebas unitarias de componentes
│   │   ├── types/                   # Tipos TypeScript personalizados
│   │   ├── utils/                   # Funciones utilitarias (ej. voz, fuentes, firebase)
│   │   ├── App.tsx                  # Componente raíz del front-end
│   │   ├── i18n.ts                  # Configuración de internacionalización
│   │   ├── index.css                # Estilos globales
│   │   ├── main.tsx                 # Punto de entrada de React
│   │   └── vite-env.d.ts            # Tipos generados para Vite + TypeScript
│   ├── .eslintrc.json              # Configuración para el linter ESLint
│   ├── jest.config.js              # Configuración de pruebas unitarias (Jest)
│   ├── postcss.config.js           # Configuración para PostCSS
│   ├── tailwind.config.js          # Configuración de Tailwind CSS
│   ├── tsconfig*.json              # Configuraciones de TypeScript
│   ├── vite.config.ts              # Configuración del bundler Vite
│   └── package.json                # Dependencias y scripts del front-end

└── back-end/                        # Servidor y lógica del API (Node + TS)
    ├── node_modules/               # Dependencias del back-end
    ├── src/                        # Código fuente del back
    │   ├── config/                 # Configuraciones generales (como Firebase)
    │   ├── controllers/            # Controladores de lógica para rutas
    │   ├── middlewares/            # Middleware de autenticación/validaciones
    │   ├── models/                 # Modelos de datos (opcional si se escala)
    │   ├── routes/                 # Definición de rutas (endpoints API)
    │   ├── services/               # Servicios que interactúan con Firestore
    │   ├── utils/                  # Inicialización del servidor y helpers
    │   └── keyProyecto.json        # Clave de acceso a Firebase (debe estar en .gitignore)
    ├── tests/                      # Pruebas unitarias del back-end
    ├── .eslintrc.json              # ESLint para el back-end
    ├── jest.config.js              # Configuración Jest
    ├── tsconfig.json               # Configuración TypeScript
    ├── package*.json               # Dependencias del back-end

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

