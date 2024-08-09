import Curso from '../models/cursos.js';
import Profesor from '../models/profesor.js';
import mongoose from 'mongoose';

// Crear Materia
export const createMateria = async (req, res) => {
    try {
        const { nombre, profesores  } = req.body;

        // Validar que las ofertas educativas existan
        if (profesores) {
            const validProfesores = await Profesor.find({ '_id': { $in: profesores } });
            if (validProfesores.length !== profesores.length) {
                return res.status(400).json({ message: 'Una o más profesores no son validos' });
            }
        }

        const nuevoCurso = new Curso({ nombre, profesores });
        await nuevoCurso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los profesores
export const getProfesores = async (req, res) => {
    try {
        const profes = await Profesor.find().populate('profesores', 'nombre');
        res.json(profes);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Obtener Curso por ID
export const getCursoById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID del Curso
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        const cursitos = await Curso.findById(id).populate('profesores', 'nombre');
        if (!cursitos) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json(cursitos);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Actualizar Cursos
export const updateCursos = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, profesores } = req.body;

        // Validar ID del curso
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        // Validar que los cursos existan
        if (profesores) {
            const validProfesor = await Profesor.find({ '_id': { $in: profesores } });
            if (validProfesor.length !== profesores.length) {
                return res.status(400).json({ message: 'Una o más profesores no son válidos' });
            }
        }

        const cursoActualizado = await Curso.findByIdAndUpdate(id, { nombre, profesores }, { new: true }).populate('profesores', 'nombre');
        if (!cursoActualizado) {
            return res.status(404).json({ message: 'Cursos no encontrado' });
        }

        res.json(cursoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar Materia
export const deleteCurso = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar ID de Materia
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de materia inválido' });
        }

        const cursoEliminado = await Curso.findByIdAndDelete(id);
        if (!cursoEliminado) {
            return res.status(404).json({ message: 'Curso no encontrada' });
        }

        res.json({ message: 'Curso eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
