import { Router } from 'express';
const router = Router();

import { getOfertas, getOfertaById, createOferta, updateOferta, deleteOferta, addProfesoresToOferta } from '../controllers/divisiones.controller.js';

// Rutas existentes
router.get('/', getOfertas);
router.get('/:ofertaId', getOfertaById);
router.post('/', createOferta);
router.put('/:ofertaId', updateOferta);
router.delete('/:ofertaId', deleteOferta);

// Nueva ruta para relacionar una oferta educativa con profesores
router.post('/relacionar-profesores', addProfesoresToOferta);

export default router;
