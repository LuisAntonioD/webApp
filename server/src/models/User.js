import { Schema,model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true
    },
    imgurl:{
        type: String,
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

//Metodo para encriptar la contraseña de usuario
userSchema.statics.encryptPassword = async (password) => {
    //Gnerear un salt para encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    //Retornar la contraseña encriptada
    return await bcrypt.hash(password, salt);
};

// Método para comparar la contraseña
userSchema.statics.comparePassword = async function (password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
};


export default model('User' ,userSchema);