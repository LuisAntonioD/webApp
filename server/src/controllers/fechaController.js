import fechas from '../models/fechas.js';
import mongoose from 'mongoose';
import profesores from '../models/profesor.js';


export const getFechas = async (req, res) =>{
    const fechas = await fechas.find();
    res.json(fechas);
}

// Obtener una fecha por su ID
export const getFechaById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID del Curso
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        const cursitos = await fechas.findById(id).populate('profesores', 'nombre');
        if (!cursitos) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json(cursitos);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const createFecha = async (req, res) =>{
    try{    
        const {fecha, horaInicio, horaFinal} = req.body;
        const newFecha = new fechas({fecha, horaInicio, horaFinal});
        const fechasave = await newFecha.save();
        res.status(201).json(fechasave);
    } catch (error) {
        console.error('Error al crear Fecha:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const updateFecha = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, horaInicio, horaFinal, profesor } = req.body;

        // Validar ID del Horario
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de horario inválido' });
        }

        // Validar que el profesor exista
        if (profesor) {
            const validProfesor = await profesores.findById(profesor);
            if (!validProfesor) {
                return res.status(400).json({ message: 'Profesor no válido' });
            }
        }

        // Actualizar horario
        const actualizarfecha = await date.findByIdAndUpdate(
            id,
            { dia, horaInicio, horaFinal, profesor },
            { new: true }
        ).populate('profesor', 'nombre');

        if (!actualizarfecha) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }

        res.json(actualizarfecha);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const deletefecha = async (req, res) => {
    try {
        const deletefecha = await fechas.findByIdAndDelete(req.params.fechaId);
        if (!deletefecha) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json({ message: 'Fecha borrada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar Fecha:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
