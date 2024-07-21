    import Admision from '../models/admision.js';
import mongoose from 'mongoose';
import OfertaEducativa from '../models/ofertaEducativa.js';


export const getAdmisiones = async (req, res) =>{
    const admisiones = await Admision.find();
    res.json(admisiones);
}

// Obtener una admisión por su ID
export const getAdmisionById = async (req, res) => {
    try {
        // Verificar si el ID proporcionado es válido
        if (!mongoose.Types.ObjectId.isValid(req.params.admisionId)) {
            return res.status(400).json({ message: 'ID de admisión inválido' });
        }

        const admision = await Admision.findById(req.params.admisionId);
        if (!admision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json(admision);
    } catch (error) {
        console.error('Error al obtener admision por ID:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const createAdmision = async (req, res) =>{
    try{    
        const {nombre, activo} = req.body;
        const newAdmision = new Admision({nombre,activo});
        const admisionSave = await newAdmision.save();
        res.status(201).json(admisionSave);
    } catch (error) {
        console.error('Error al crear admision:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const updateAdmision = async (req, res) => {
    try {
        const { nombre, activo } = req.body;
        const updatedAdmision = await Admision.findByIdAndUpdate(req.params.admisionId, { nombre, activo }, { new: true });
        if (!updatedAdmision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json(updatedAdmision);
    } catch (error) {
        console.error('Error al actualizar admision:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const deleteAdmision = async (req, res) => {
    try {
        const deletedAdmision = await Admision.findByIdAndDelete(req.params.admisionId);
        if (!deletedAdmision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }
        res.json({ message: 'Admision borrada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar admision:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}


// Relacionar admisiones con ofertaEducativa
export const adminNewOfert = async (req, res) => {

    const { admisiones, ofertasaniadidas } = req.body;

    // Validación del ID de la admision
    if (!mongoose.Types.ObjectId.isValid(admisiones)) {
        return res.status(400).json({ message: 'ID Admisióninválido' });
    }

    try {
        // Verificar si existe la admision
        const admision = await Admision.findById(admisiones);
        if (!admision) {
            return res.status(404).json({ message: 'Admision no encontrada' });
        }

        // Validar IDs de mis ofertas
        const OfertaExistente = await OfertaEducativa.find({ '_id': { $in: ofertasaniadidas } });

        if (OfertaExistente.length !== ofertasaniadidas.length) {

            const OfertaExistenteIds = OfertaExistente.map(ofertanew => ofertanew._id.toString());

            const ofertasNoEncontradas = ofertasaniadidas.filter(id => !OfertaExistenteIds.includes(id));

            return res.status(404).json({ message: `Una o mas ofertas no fueron encontrados: ${ofertasNoEncontradas.join(', ')}` });
        }
        // Asignar los IDs de ofertaeducativa a admision
        admision.ofertas = ofertasaniadidas;
        await admision.save();

        res.status(200).json({ message: 'Ofertas añadidas a la admisión exitosamente', admision });
    } catch (error) {
        console.error('Error al relacionar las ofertas con la admisión:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

export const getRelatedOffers = async (req, res) => {
    try {
        const { admisionId } = req.params;

        // Encuentra la admisión por ID
        const admision = await Admision.findById(admisionId).exec();

        if (!admision) {
            return res.status(404).json({ message: 'Admisión no encontrada' });
        }

        // Obtiene las ofertas educativas relacionadas con la admisión
        const offers = await OfertaEducativa.find({ _id: { $in: admision.ofertas } }).exec();

        res.json(offers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ofertas educativas' });
    }
};