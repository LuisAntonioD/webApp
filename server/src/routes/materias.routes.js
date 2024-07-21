import express from 'express';
const router = express.Router();
import * as materiaController from '../controllers/materia.controller.js';

// Crear Materia
router.post('/', materiaController.createMateria);

// Leer todas las Materias
router.get('/', materiaController.getMaterias);

// Leer Materia por ID
router.get('/:id', materiaController.getMateriaById);

// Actualizar Materia
router.put('/:id', materiaController.updateMateria);

// Eliminar Materia
router.delete('/:id', materiaController.deleteMateria);

export default router;
