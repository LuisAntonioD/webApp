import Materia from '../models/materia.js';
import OfertaEducativa from '../models/ofertaEducativa.js';
import mongoose from 'mongoose';

// Crear Materia
export const createMateria = async (req, res) => {
    try {
        const { nombre, descripcion, ofertasEducativas } = req.body;

        // Validar que las ofertas educativas existan
        if (ofertasEducativas) {
            const validOfertas = await OfertaEducativa.find({ '_id': { $in: ofertasEducativas } });
            if (validOfertas.length !== ofertasEducativas.length) {
                return res.status(400).json({ message: 'Una o más ofertas educativas no son válidas' });
            }
        }

        const nuevaMateria = new Materia({ nombre, descripcion, ofertasEducativas });
        await nuevaMateria.save();
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las Materias
export const getMaterias = async (req, res) => {
    try {
        const materias = await Materia.find().populate('ofertasEducativas', 'nombre');
        res.json(materias);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Obtener Materia por ID
export const getMateriaById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID de Materia
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        const materia = await Materia.findById(id).populate('ofertasEducativas', 'nombre');
        if (!materia) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }

        res.json(materia);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Actualizar Materia
export const updateMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, ofertasEducativas } = req.body;

        // Validar ID de Materia
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        // Validar que las ofertas educativas existan
        if (ofertasEducativas) {
            const validOfertas = await OfertaEducativa.find({ '_id': { $in: ofertasEducativas } });
            if (validOfertas.length !== ofertasEducativas.length) {
                return res.status(400).json({ message: 'Una o más ofertas educativas no son válidas' });
            }
        }

        const materiaActualizada = await Materia.findByIdAndUpdate(id, { nombre, descripcion, ofertasEducativas }, { new: true }).populate('ofertasEducativas', 'nombre');
        if (!materiaActualizada) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }

        res.json(materiaActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar Materia
export const deleteMateria = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID de Materia
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        const materiaEliminada = await Materia.findByIdAndDelete(id);
        if (!materiaEliminada) {
            return res.status(404).json({ message: 'Materia no encontrada' });
        }

        res.json({ message: 'Materia eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
