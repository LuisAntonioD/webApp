import { Router } from 'express';
const router = Router();

import { getDivisiones, createDivision, getDivisionById, updateDivision, deleteDivision } from '../controllers/divisiones.controller.js';

// Rutas existentes
router.get('/', getDivisiones);
router.post('/', createDivision);
router.get('/:divisionId', getDivisionById);
router.put('/:divisionId', updateDivision);
router.delete('/:divisionId', deleteDivision);

export default router;
