import Curso from '../models/cursos.js';
import Profesor from '../models/profesor.js';
import mongoose from 'mongoose';

// Crear Curso
export const createCurso = async (req, res) => {
    try {
        const { nombre } = req.body;

        if (!nombre) {
            return res.status(400).json({ message: 'El nombre del curso es requerido' });
        }

        const nuevoCurso = new Curso({ nombre });
        await nuevoCurso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


// Obtener todos los Cursos
export const getCursos = async (req, res) => {
    try {
        const cursitos = await Curso.find().populate('profesores', 'nombre');
        res.json(cursitos);
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
            return res.status(400).json({ message: 'ID de curso inválido' });
        }

        // Validar que los profesores existan
        if (profesores) {
            const validProfesor = await Profesor.find({ '_id': { $in: profesores } });
            if (validProfesor.length !== profesores.length) {
                return res.status(400).json({ message: 'Uno o más profesores no son válidos' });
            }
        }
        // Actualizar curso
        const cursoActualizado = await Curso.findByIdAndUpdate(
            id, 
            { nombre, profesores }, 
            { new: true }
        ).populate('profesores', 'nombre');

        if (!cursoActualizado) {
            return res.status(404).json({ message: 'Curso no encontrado' });
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