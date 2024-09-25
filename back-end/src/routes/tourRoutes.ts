import express from 'express';
import { getAllTours } from '../controllers/tourController';

const router = express.Router();

router.get('/tours', getAllTours);

export default router;
