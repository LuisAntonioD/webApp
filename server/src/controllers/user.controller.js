import User from '../models/User.js';
import Role from "../models/Role.js";
import mongoose from 'mongoose';
import * as token from "../controllers/token.controller.js";
import * as messages from "../../Art/Messages.js";

// Obtener todos los users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error al obtener users:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener los roles 
export const getRol = async (req, res) => {
    try {
        const rol = await Role.find();
        res.json(rol);
    } catch (error) {
        console.error('Error al obtener roles:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Obtener un user por su ID
export const getUserById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
            return res.status(400).json({ message: 'ID de user inválido' });
        }

        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'El ID no corresponde a ningún user' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error al obtener user por ID:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

// Crear un nuevo user
export const createUser = async (req, res) => {
    try {
        const { username, email, imgurl, password } = req.body;
        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)  // Corrected to use User
        });

        if (imgurl) {
            newUser.imgurl = imgurl;
        }

        if (req.body.roles) {
            const foundRoles = await Role.find({ name: { $in: req.body.roles } });
            newUser.roles = foundRoles.map(role => role.id);
        } else {
            const role = await Role.findOne({ name: "customer" });
            newUser.roles = [role.id];
        }

        const saveUser = await newUser.save();
        console.log(saveUser);

        const generatedToken = await token.signToken(saveUser.id);  // Generate token for the created user

        res.status(201).json({ user: saveUser, token: generatedToken });  // Respond with the created user and the token
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}


/*export const updateUser = async (req, res) => {
    try {
        const { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { nombre, apellidos, numeroEmpleado, correo, fechaNacimiento }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User no encontrado' });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar user:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}*/

// Actualizar un user por su ID
export const updateUser = async (req, res) => {
    try {
        const { username, email, password, imgurl, roles } = req.body;

        // Buscar el usuario por ID
        let userToUpdate = await User.findById(req.params.userId);

        // Si no se encuentra el usuario, retornar error
        if (!userToUpdate) {
            return res.status(404).json({ message: 'User no encontrado' });
        }

        // Actualizar campos del usuario si se proporcionan
        if (username) userToUpdate.username = username;
        if (email) userToUpdate.email = email;
        if (imgurl) userToUpdate.imgurl = imgurl;
        if (password) userToUpdate.password = await User.encryptPassword(password);

        // Actualizar roles si se proporcionan
        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            userToUpdate.roles = foundRoles.map(role => role.id);
        }

        // Guardar los cambios en el usuario
        const updatedUser = await userToUpdate.save();

        res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar user:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}




// Eliminar un user por su ID
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);  // Corrected to use User
        if (!deletedUser) {
            return res.status(404).json({ message: 'User no encontrado' });
        }
        res.json({ message: 'User eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar user:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
