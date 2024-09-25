TuristikApp/
│
├── front-end/
│   ├── node_modules/          # Dependencias de front-end
│   ├── public/                # Archivos públicos (HTML, etc.)
│   ├── src/
│   │   ├── api/               # Llamadas a APIs externas
│   │   ├── assets/            # Imágenes, fuentes, etc.
│   │   ├── components/        # Componentes reutilizables
│   │   ├── hooks/             # Custom hooks
│   │   ├── layouts/           # Componentes de layout
│   │   ├── pages/             # Páginas de la aplicación
│   │   ├── routes/            # Configuración de rutas
│   │   ├── services/          # Lógica de negocio (interactuar con APIs)
│   │   ├── styles/            # Archivos CSS o SCSS
│   │   ├── tests/             # Pruebas unitarias del front-end
│   │   ├── types/             # Tipos TypeScript globales
│   │   ├── utils/             # Funciones de utilidad
│   │   └── main.tsx           # Archivo principal del front-end
│   ├── .eslintrc.json         # Configuración ESLint
│   ├── .prettierrc            # Configuración Prettier
│   ├── jest.config.js         # Configuración Jest
│   ├── tsconfig.json          # Configuración TypeScript
│   ├── package.json           # Configuración de dependencias
│   └── vite.config.ts         # Configuración Vite
│
└── back-end/
    ├── node_modules/          # Dependencias del back-end
    ├── src/
    │   ├── controllers/       # Controladores que manejan lógica de rutas
    │   ├── middlewares/       # Middleware para validación, autenticación, etc.
    │   ├── models/            # Modelos de datos (si utilizas una BD)
    │   ├── routes/            # Rutas principales de la API
    │   ├── services/          # Lógica de negocio (comunicación con BD, etc.)
    │   ├── utils/             # Funciones de utilidad
    │   ├── config/            # Configuraciones de la app (puertos, BD, etc.)
    │   ├── app.ts             # Inicialización de la aplicación Express
    │   └── index.ts           # Punto de entrada principal
    ├── tests/                 # Pruebas unitarias del back-end
    ├── .eslintrc.json         # Configuración ESLint
    ├── .prettierrc            # Configuración Prettier
    ├── jest.config.js         # Configuración Jest
    ├── tsconfig.json          # Configuración TypeScript
    └── package.json           # Configuración de dependencias

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