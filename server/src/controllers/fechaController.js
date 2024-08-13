import fechas from '../models/fechas.js';
import mongoose from 'mongoose';
import Profesor from '../models/profesor.js';

// Obtener todas las fechas
export const getFechas = async (req, res) => {
    try {
        const fechitas = await fechas.find().populate('profesor', 'nombre');
        res.json(fechitas);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener una fecha por su ID
export const getFechaById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID del Curso
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de fecha inválido' });
        }

        const fechita = await fechas.findById(id).populate('profesor', 'nombre');
        if (!fechita) {
            return res.status(404).json({ message: 'Fecha no encontrada' });
        }
        res.json(fechita);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Crear una nueva fecha
export const createFecha = async (req, res) => {
    try {    
        const { fecha, horaInicio, horaFinal, profesor } = req.body;
        const newFecha = new fechas({ fecha, horaInicio, horaFinal, profesor });
        const fechasave = await newFecha.save();
        res.status(201).json(fechasave);
    } catch (error) {
        console.error('Error al crear Fecha:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Actualizar una fecha existente
export const updateFecha = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, horaInicio, horaFinal, profesor } = req.body;

        // Validar ID del Horario
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de horario inválido' });
        }

        // Validar que el profesor exista si se proporciona
        if (profesor) {
            const validProfesor = await Profesor.findById(profesor);
            if (!validProfesor) {
                return res.status(400).json({ message: 'Profesor no válido' });
            }
        }

        // Actualizar horario
        const actualizarfecha = await fechas.findByIdAndUpdate(
            id,
            { fecha, horaInicio, horaFinal, profesor: profesor || undefined },
            { new: true, runValidators: true }
        ).populate('profesor', 'nombre');

        if (!actualizarfecha) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }

        res.json(actualizarfecha);
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const deletefecha = async (req, res) => {
    try {
        const deleteFecha = await fechas.findByIdAndDelete(req.params.fechaId);
        if (!deleteFecha) {
            return res.status(404).json({ message: 'Fecha no encontrada' });
        }
        res.json({ message: 'Fecha borrada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar Fecha:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
