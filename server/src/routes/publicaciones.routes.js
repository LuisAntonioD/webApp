import express from 'express';
const router = express.Router();
import * as publicacionController from '../controllers/publicacion.controller.js';

// Crear Publicacion
router.post('/', publicacionController.createPublicacion);

// Leer todas las Publicaciones
router.get('/', publicacionController.getPublicaciones);

// Actualizar Publicacion
router.put('/:id', publicacionController.updatePublicacion);

// Eliminar Publicacion
router.delete('/:id', publicacionController.deletePublicacion);

export default router;
