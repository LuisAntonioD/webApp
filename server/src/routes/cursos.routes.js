import express from 'express';
const router = express.Router();
import * as cursoController from '../controllers/cursos.controller.js';

// Crear Cursos
router.post('/', cursoController.createCurso);

// Traer todos los cursos
router.get('/', cursoController.getCursos);

// Traer cursos por ID
router.get('/:id', cursoController.getCursoById);

// Actualizar Cursos
router.put('/:id', cursoController.updateCursos);

// Eliminar Cursos
router.delete('/:id', cursoController.deleteCurso);

export default router;
