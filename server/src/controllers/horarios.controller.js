import Horario from '../models/horario.js';
import Profesor from '../models/profesor.js';
import mongoose from 'mongoose';

// Crear Horario
export const createHorario = async (req, res) => {
    try {
        const { dia, horaInicio, horaFin, profesor } = req.body;

        if (!dia || !horaInicio || !horaFin) {
            return res.status(400).json({ message: 'Día, hora de inicio y hora de fin son requeridos' });
        }

        const nuevoHorario = new Horario({ dia, horaInicio, horaFin, profesor });
        await nuevoHorario.save();
        res.status(201).json(nuevoHorario);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Obtener todos los Horarios
export const getHorarios = async (req, res) => {
    try {
        const horarios = await Horario.find().populate('profesor', 'nombre');
        res.json(horarios);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Obtener Horario por ID
export const getHorarioById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID del Horario
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de horario inválido' });
        }

        const horario = await Horario.findById(id).populate('profesor', 'nombre');
        if (!horario) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }
        res.json(horario);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Actualizar Horario
export const updateHorario = async (req, res) => {
    try {
        const { id } = req.params;
        const { dia, horaInicio, horaFin, profesor } = req.body;

        // Validar ID del Horario
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de horario inválido' });
        }

        // Validar que el profesor exista
        if (profesor) {
            const validProfesor = await Profesor.findById(profesor);
            if (!validProfesor) {
                return res.status(400).json({ message: 'Profesor no válido' });
            }
        }

        // Actualizar horario
        const horarioActualizado = await Horario.findByIdAndUpdate(
            id,
            { dia, horaInicio, horaFin, profesor },
            { new: true }
        ).populate('profesor', 'nombre');

        if (!horarioActualizado) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }

        res.json(horarioActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar Horario
export const deleteHorario = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID del Horario
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de horario inválido' });
        }

        const horarioEliminado = await Horario.findByIdAndDelete(id);
        if (!horarioEliminado) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }

        res.json({ message: 'Horario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
