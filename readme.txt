TuristikApp/
│
├── front-end/
│   ├── node_modules/          # Dependencias de front-end
│   ├── public/                # Archivos públicos (HTML, etc.)
│   │   └── images/            # Imágenes utilizadas en la aplicación
│   ├── src/
│   │   ├── api/               # Llamadas a APIs externas
│   │   ├── assets/            # Archivos estáticos (imágenes, fuentes, etc.)
│   │   │   └── react.svg      # Icono React utilizado en la interfaz
│   │   ├── components/        # Componentes reutilizables
│   │   │   ├── ChatHistory/   # Componente para el historial del chatbot
│   │   │   │   └── index.tsx  # Lógica para mostrar el historial de chat
│   │   │   ├── Loading/       # Componente para mostrar el estado de carga
│   │   │   │   └── index.tsx  # Indicador de carga para el chatbot
│   │   │   ├── Footer.tsx     # Componente Footer reutilizable
│   │   │   ├── Form.tsx       # Componente de formulario
│   │   │   ├── Header.tsx     # Componente Header reutilizable
│   │   │   ├── Timeline.tsx   # Componente para la visualización del timeline
│   │   │   └── chat.tsx       # Componente principal del chatbot
│   │   ├── hooks/             # Custom hooks
│   │   │   ├── useChatbotLogic.ts # Lógica del chatbot, interactúa con el API de IA
│   │   │   └── useLanguage.ts # Lógica para el cambio de idioma
│   │   ├── locales/           # Archivos de localización
│   │   │   ├── en/            # Traducciones al inglés
│   │   │   │   ├── form.json        # Texto para el formulario
│   │   │   │   └── traslation.json  # Traducción principal
│   │   │   ├── es/            # Traducciones al español
│   │   │   │   ├── form.json        # Texto para el formulario
│   │   │   │   └── traslation.json  # Traducción principal
│   │   ├── pages/             # Páginas de la aplicación
│   │   │   ├── Comprobando.tsx        # Página de comprobación de datos
│   │   │   ├── FormularioSatisfaccion.tsx  # Página del formulario de satisfacción
│   │   │   └── PlantillaBase.tsx      # Plantilla base para páginas
│   │   ├── routes/            # Configuración de rutas
│   │   │   └── getDataById.ts  # Función para obtener datos de Firebase por ID
│   │   ├── services/          # Lógica de negocio (interactuar con APIs)
│   │   │   └── getDataById.ts # Servicio para obtener datos desde Firebase
│   │   ├── styles/            # Archivos CSS o SCSS
│   │   │   ├── Footer.css     # Estilos del Footer
│   │   │   ├── Header.css     # Estilos del Header
│   │   │   ├── PlantillaBase.css # Estilos de la plantilla base
│   │   │   └── timeline.css   # Estilos del Timeline
│   │   ├── test/              # Pruebas unitarias del front-end
│   │   ├── types/             # Tipos TypeScript globales
│   │   │   └── SitioTuristico.ts  # Definiciones de tipos para Sitios Turísticos
│   │   ├── utils/             # Funciones de utilidad
│   │   │   ├── bbddFirebase.ts      # Conexión a Firebase
│   │   │   ├── cambiarTamanoFuente.ts  # Función para cambiar el tamaño de la fuente
│   │   │   └── voice.ts           # Funciones de voz para la app
│   │   ├── App.tsx              # Componente principal de la aplicación
│   │   ├── i18n.ts              # Configuración de internacionalización
│   │   ├── index.css            # Estilos globales
│   │   ├── main.tsx             # Archivo principal del front-end
│   │   └── vite-env.d.ts        # Tipos TypeScript para el entorno Vite
│   ├── .eslintrc.json         # Configuración ESLint
│   ├── jest.config.js         # Configuración Jest
│   ├── postcss.config.js      # Configuración PostCSS
│   ├── tailwind.config.js     # Configuración Tailwind CSS
│   ├── tsconfig.json          # Configuración TypeScript
│   ├── tsconfig.app.json      # Configuración TypeScript específica para la aplicación
│   ├── tsconfig.node.json     # Configuración TypeScript para Node.js
│   ├── vite.config.ts         # Configuración Vite (bundler utilizado)
│   └── package.json           # Configuración de dependencias
│
└── back-end/
    ├── node_modules/          # Dependencias del back-end
    ├── src/
    │   ├── config/            # Configuraciones del proyecto
    │   │   └── firestoreConfig.js # Configuración de Firestore (base de datos)
    │   ├── controllers/       # Controladores que manejan lógica de rutas
    │   │   └── Controller.js  # Controlador principal para gestionar las operaciones del API
    │   ├── middlewares/       # Middleware para validaciones, autenticación, etc. (vacío actualmente)
    │   ├── models/            # Modelos de datos (vacío, se puede utilizar para una BD más estructurada)
    │   ├── routes/            # Rutas principales de la API
    │   │   └── routes.js      # Definición de rutas que conectan con los controladores
    │   ├── services/          # Lógica de negocio, comunicación con Firestore
    │   │   └── firebaseService.js # Interfaz para la comunicación con Firebase Firestore
    │   ├── utils/             # Funciones de utilidad
    │   │   ├── app.js         # Inicialización del servidor Express
    │   │   └── index.ts       # Punto de entrada principal del back-end
    |    └── keyProyecto.json   # Credenciales para la conexión a Firebase Firestore (debería estar en .gitignore)
    ├── tests/                 # Pruebas unitarias del back-end
    │   └── app.test.ts        # Prueba unitaria para la aplicación
    ├── .eslintrc.json         # Configuración ESLint para el análisis de código
    ├── jest.config.js         # Configuración Jest para pruebas unitarias
    ├── tsconfig.json          # Configuración TypeScript
    ├── package.json           # Configuración de dependencias del back-end
    ├── package-lock.json      # Control de versiones exactas de las dependencias



Comandos para iniciar el front-end y el back-end
1. Iniciar el front-end (React + Vite + TypeScript)
Para iniciar el front-end, asegúrate de estar dentro de la carpeta front-end y ejecutar los siguientes comandos:


cd TuristikApp/front-end
npm install         # Instala las dependencias (solo la primera vez o cuando agregues nuevas)
npm run dev         # Inicia el servidor de desarrollo de Vite
Esto levantará el front-end en el puerto que asigne Vite, por ejemplo, http://localhost:5173. Puedes verificar la consola para ver el puerto exacto.

2. Iniciar el back-end (Node.js + Express + TypeScript)
Para iniciar el back-end, asegúrate de estar en la carpeta back-end y ejecuta estos comandos:

cd ../back-end
npm install         # Instala las dependencias (solo la primera vez o cuando agregues nuevas)
npm run dev         # Inicia el servidor de desarrollo con nodemon
El servidor del back-end estará corriendo en http://localhost:3000 (o el puerto que hayas configurado en tu archivo app.ts).

Resumen de Comandos
Front-End:
Instalar dependencias: npm install
Iniciar desarrollo: npm run dev
Ubicación: TuristikApp/front-end

Back-End:
Instalar dependencias: npm install
Iniciar desarrollo: npm run dev
Ubicación: TuristikApp/back-end