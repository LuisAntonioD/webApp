import Publicacion from '../models/publicacion.js';
import mongoose from 'mongoose';

// Crear Publicación
export const createPublicacion = async (req, res) => {
    try {
        const { titulo, descripcion, autor, fecha } = req.body;

        

        const nuevaPublicacion = new Publicacion({ titulo, descripcion, autor, fecha });
        await nuevaPublicacion.save();
        res.status(201).json(nuevaPublicacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las Publicaciónes
export const getPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.find();
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


// Actualizar Publicación
export const updatePublicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, autor, fecha } = req.body;

        // Validar ID de Materia
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de publicacion inválido' });
        }

       

        const publicacionActualizada = await Publicacion.findByIdAndUpdate(id, { titulo, descripcion, autor, fecha },
            { new: true });
        if (!publicacionActualizada) {
            return res.status(404).json({ message: 'Publicacion no encontrada' });
        }

        res.json(publicacionActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar Publicación
export const deletePublicacion = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID de Publicacion
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de publicacion inválido' });
        }

        const publicacionEliminada = await Publicacion.findByIdAndDelete(id);
        if (!publicacionEliminada) {
            return res.status(404).json({ message: 'Publicacion no encontrada' });
        }

        res.json({ message: 'Publicacion eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
