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
    profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }], // Añadir este campo para relacionar profesores
    divisiones: [{ type: Schema.Types.ObjectId, ref: 'Division' }] // Añadir este campo para relacionar divisiones
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('OfertaEducativa', ofertaEducativaSchema);
