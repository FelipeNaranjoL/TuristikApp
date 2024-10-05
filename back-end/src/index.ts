import express, { Request, Response } from 'express'; // Importamos express y los tipos Request y Response para tipar los parámetros de las funciones

const app = express();  // Creamos una instancia de la aplicación Express
const port = 3000;  // Definimos el puerto en el que escuchará la aplicación

// Definimos una ruta GET para la raíz del servidor
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TuristikApp Back-End');  // Enviamos una respuesta con un mensaje de bienvenida
});

// Ponemos el servidor a escuchar en el puerto definido
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // Mostramos un mensaje en consola indicando que el servidor está corriendo
});
