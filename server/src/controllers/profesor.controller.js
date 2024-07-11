import Profesor from '../models/profesor.js';
import mongoose from 'mongoose';

// Obtener todos los profesores
export const getProfesores = async (req, res) => {
    try {
        const profesores = await Profesor.find();
        res.json(profesores);
    } catch (error) {
        console.error('Error al obtener profesores:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener un profesor por su ID
export const getProfesorById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.profesorId)) {
            return res.status(400).json({ message: 'ID de profesor inválido' });
        }

        const profesor = await Profesor.findById(req.params.profesorId);
        if (!profesor) {
            return res.status(404).json({ message: 'El ID no corresponde a ningún profesor' });
        }
        res.json(profesor);
    } catch (error) {
        console.error('Error al obtener profesor por ID:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Crear un nuevo profesor
export const createProfesor = async (req, res) => {
    try {
        const { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento, telefono } = req.body;
        const newProfesor = new Profesor({ nombre, apellidos, numeroEmpleado, correo, fechaNacimiento, telefono });
        const profesorSave = await newProfesor.save();
        res.status(201).json(profesorSave);
    } catch (error) {
        console.error('Error al crear profesor:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Actualizar un profesor por su ID
export const updateProfesor = async (req, res) => {
    try {
        const { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento, telefono } = req.body;
        const updatedProfesor = await Profesor.findByIdAndUpdate(req.params.profesorId, { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento, telefono }, { new: true, runValidators: true });
        if (!updatedProfesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json(updatedProfesor);
    } catch (error) {
        console.error('Error al actualizar profesor:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Eliminar un profesor por su ID
export const deleteProfesor = async (req, res) => {
    try {
        const deletedProfesor = await Profesor.findByIdAndDelete(req.params.profesorId);
        if (!deletedProfesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
        res.json({ message: 'Profesor eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar profesor:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
