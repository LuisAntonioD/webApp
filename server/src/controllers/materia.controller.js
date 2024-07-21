import Materia from '../models/materia.js';
import OfertaEducativa from '../models/ofertaEducativa.js';
import mongoose from 'mongoose';

// Crear Materia
export const createMateria = async (req, res) => {
    try {
        const { nombre, descripcion, ofertasEducativas } = req.body;
        const nuevaMateria = new Materia({ nombre, descripcion, ofertasEducativas });
        await nuevaMateria.save();
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Leer Materias
export const getMaterias = async (req, res) => {
    try {
        const materias = await Materia.find().populate('ofertasEducativas');
        res.status(200).json(materias);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Leer Materia por ID
export const getMateriaById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }
        const materia = await Materia.findById(req.params.id).populate('ofertasEducativas');
        if (!materia) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }
        res.status(200).json(materia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar Materia
export const updateMateria = async (req, res) => {
    try {
        const { nombre, descripcion, ofertasEducativas } = req.body;
        const materiaActualizada = await Materia.findByIdAndUpdate(req.params.id, { nombre, descripcion, ofertasEducativas }, { new: true });
        if (!materiaActualizada) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }
        res.status(200).json(materiaActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar Materia
export const deleteMateria = async (req, res) => {
    try {
        const materiaEliminada = await Materia.findByIdAndDelete(req.params.id);
        if (!materiaEliminada) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }
        res.status(200).json({ message: 'Materia eliminada exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
