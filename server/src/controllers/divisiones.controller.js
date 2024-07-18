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

/*
// Relacionar una oferta educativa con Divisiones
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
*/
