import mongoose from 'mongoose';

const { Schema } = mongoose;

const publicacionSchema = new Schema({
    titulo: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    autor: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Publicacion', publicacionSchema);
