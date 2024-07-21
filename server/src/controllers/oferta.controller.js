import OfertaEducativa from '../models/ofertaEducativa.js';
import Profesor from '../models/profesor.js';
import Division from '../models/divisiones.js';
import mongoose from 'mongoose';

// Obtener todas las ofertas educativas
export const getOfertas = async (req, res) => {
    try {
        const ofertas = await OfertaEducativa.find();
        res.json(ofertas);
    } catch (error) {
        console.error('Error al obtener ofertas educativas:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener una oferta educativa por su ID
export const getOfertaById = async (req, res) => {
    try {
        // Verificar si el ID proporcionado es válido
        if (!mongoose.Types.ObjectId.isValid(req.params.ofertaId)) {
            return res.status(400).json({ message: 'ID de oferta educativa inválido' });
        }

        const oferta = await OfertaEducativa.findById(req.params.ofertaId);
        if (!oferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json(oferta);
    } catch (error) {
        console.error('Error al obtener oferta educativa por ID:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Crear una nueva oferta educativa
export const createOferta = async (req, res) => {
    try {
        const { nombre, activo, profesores, divisiones } = req.body;
        const newOferta = new OfertaEducativa({ nombre, activo, profesores, divisiones });
        const ofertaSave = await newOferta.save();
        res.status(201).json(ofertaSave);
    } catch (error) {
        console.error('Error al crear oferta educativa:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Actualizar una oferta educativa por su ID
export const updateOferta = async (req, res) => {
    try {
        const { nombre, activo, profesores, divisiones } = req.body;
        const updatedOferta = await OfertaEducativa.findByIdAndUpdate(req.params.ofertaId, { nombre, activo, profesores, divisiones }, { new: true });
        if (!updatedOferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json(updatedOferta);
    } catch (error) {
        console.error('Error al actualizar oferta educativa:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Eliminar una oferta educativa por su ID
export const deleteOferta = async (req, res) => {
    try {
        const deletedOferta = await OfertaEducativa.findByIdAndDelete(req.params.ofertaId);
        if (!deletedOferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }
        res.json({ message: 'Oferta educativa eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar oferta educativa:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Relacionar una oferta educativa con profesores
export const addProfesoresToOferta = async (req, res) => {
    const { ofertaId, profesoresIds } = req.body;

    // Validación de ID de oferta educativa
    if (!mongoose.Types.ObjectId.isValid(ofertaId)) {
        return res.status(400).json({ message: 'ID de oferta educativa inválido' });
    }

    try {
        // Verificar existencia de la oferta educativa
        const oferta = await OfertaEducativa.findById(ofertaId);
        if (!oferta) {
            return res.status(404).json({ message: 'Oferta educativa no encontrada' });
        }

        // Validar IDs de profesores
        const profesoresExisten = await Profesor.find({ '_id': { $in: profesoresIds } });
        if (profesoresExisten.length !== profesoresIds.length) {
            // Alguno de los IDs de profesores no existe
            const profesoresExistenIds = profesoresExisten.map(profesor => profesor._id.toString());
            const profesoresNoEncontrados = profesoresIds.filter(id => !profesoresExistenIds.includes(id));

            return res.status(404).json({ message: `Uno o más profesores no fueron encontrados: ${profesoresNoEncontrados.join(', ')}` });
        }

        // Asignar los IDs de profesores a la oferta educativa
        oferta.profesores = profesoresIds;
        await oferta.save();

        res.status(200).json({ message: 'Profesores añadidos a la oferta educativa exitosamente', oferta });
    } catch (error) {
        console.error('Error al relacionar profesores con la oferta educativa:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};



