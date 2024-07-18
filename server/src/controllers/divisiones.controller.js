import ofertas from '../models/divisiones.js';
import divisiones from '../models/divisiones.js';
import mongoose from 'mongoose';

// Obtener todas las ofertas educativas
export const getDivisiones = async (req, res) => {
    try {
        const division = await divisiones.find();
        res.json(division);
    } catch (error) {
        console.error('Error al obtener divisiones:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener una division por su ID
export const getDivisionById = async (req, res) => {
    try {
        // Verificar si el ID proporcionado es válido
        if (!mongoose.Types.ObjectId.isValid(req.params.divisionId)) {
            return res.status(400).json({ message: 'ID de la division inválido' });
        }

        const division = await divisiones.findById(req.params.divisionId);
        if (!division) {
            return res.status(404).json({ message: 'Division no encontrada' });
        }
        res.json(division);
    } catch (error) {
        console.error('Error al obtener Divisiones por ID:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Crear una nueva Division
export const createDivision = async (req, res) => {
    try {
        const { nombre, activo, ofertas } = req.body;
        const newDivision = new divisiones({ nombre, activo, ofertas });
        const divisionSave = await newDivision.save();
        res.status(201).json(divisionSave);
    } catch (error) {
        console.error('Error al crear Division:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}



// Actualizar una Division por su ID
export const updateDivision = async (req, res) => {
    try {
        const { nombre, activo, ofertas } = req.body;
        const updateDivision = await divisiones.findByIdAndUpdate(req.params.divisionId, { nombre, activo, ofertas }, { new: true });
        if (!updateDivision) {
            return res.status(404).json({ message: 'Division no encontrada' });
        }
        res.json(updateDivision);
    } catch (error) {
        console.error('Error al actualizar la Division:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Eliminar una Division por su ID
export const deleteDivision = async (req, res) => {
    try {
        const deletedDivision = await divisiones.findByIdAndDelete(req.params.divisionId);
        if (!deletedDivision) {
            return res.status(404).json({ message: 'Division no encontrada' });
        }
        res.json({ message: 'Division eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar Division:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}


