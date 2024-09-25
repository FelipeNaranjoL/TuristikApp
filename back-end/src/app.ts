import express from 'express';
import tourRoutes from './routes/tourRoutes';

const app = express();

app.use('/api/v1', tourRoutes);

export default app;
