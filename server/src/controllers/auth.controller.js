//importar modelos
import User from "../models/User.js";
import Role from "../models/Role.js";

//importar controlador de token
import * as token from "../controllers/token.controller.js"

//importar mensajes
 import * as messages from "../../Art/Messages.js"

export const signUp = async (req,res) => {
    try{
         //extraer datos de peticion
    const {username,email,imgurl,password} = req.body;
    //crear nuevo usuario
    const newUser = new User({
        username,
        email,
        imgurl,
        password: await User.encryptPassword(password)
    });

    if(req.body.roles){
        const foundRoles = await Role.find({ name: {$in: req.body.roles} });
        newUser.roles = foundRoles.map(role => role.id);
    } else {
        const role = await Role.findOne({ name: "customer"});
        newUser.roles = [role.id];
    }

    const saveUser = await newUser.save();
    console.log(saveUser);

    //responder
    res.json(messages.savedUserSimple)
    } catch (error) {
        console.error(error);

    }   
}

export const signIn = async (req,res) => {
    //verificar correo
    const userFound = await User.findOne({email: req.body.email}).populate("roles");
    if(!userFound){
        console.log(messages.Error);
        return res.status(400).json({message: messages.notFoundEmail}); 
    } 
    //verificar contra
    const matchPasword = await User.comparePassword(req.body.password, userFound.password);
    if(!matchPasword){
        console.log(messages.Error);
        return res.status(401).json({message: messages.notFoundPassword})
    } ;

    const generatedToken = await token.signToken(userFound.id);
    //Usuario encontrado
    //console.log(userFound);
    res.status(200).json({generatedToken});
}