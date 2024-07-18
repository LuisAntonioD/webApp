import { Router } from 'express';
const router = Router();

import { getDivisiones, createDivision } from '../controllers/divisiones.controller.js';

// Rutas existentes
router.get('/', getDivisiones);
router.post('/', createDivision);

export default router;
