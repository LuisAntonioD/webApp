import mongoose from 'mongoose';

const { Schema } = mongoose;

const ofertaEducativaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }] // Añadir este campo para relacionar profesores
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('OfertaEducativa', ofertaEducativaSchema);
