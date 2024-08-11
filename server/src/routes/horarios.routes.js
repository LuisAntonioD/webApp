import express from 'express';
const router = express.Router();
import * as horarioController from '../controllers/horarios.controller.js';

// Crear Horario
router.post('/', horarioController.createHorario);

// Traer todos los horarios
router.get('/', horarioController.getHorarios);

// Traer horario por ID
router.get('/:id', horarioController.getHorarioById);

// Actualizar Horario
router.put('/:id', horarioController.updateHorario);

// Eliminar Horario
router.delete('/:id', horarioController.deleteHorario);

export default router;
