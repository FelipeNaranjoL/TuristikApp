import express, { Request, Response } from 'express';
const routes = require('./routes/routes.js'); // Importa tu archivo de enrutador

const app = express();

app.use('/', routes);

// Agrega una ruta para la raíz
app.get('/', (req: Request, res: Response) => {
  res.send('Back-End de TuristikApp funcionando exitosamente');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
