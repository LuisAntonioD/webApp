import express from 'express';
const router = express.Router();
import * as cursoController from '../controllers/cursos.controller.js';

// Crear Materia
router.post('/', cursoController.createCurso);

// Leer todas las Materias
router.get('/', cursoController.getCursos);

// Leer Materia por ID
router.get('/:id', cursoController.getCursoById);

// Actualizar Materia
router.put('/:id', cursoController.updateCursos);

// Eliminar Materia
router.delete('/:id', cursoController.deleteCurso);

export default router;
