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
    profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }],
    divisiones: [{ type: Schema.Types.ObjectId, ref: 'Division' }],
    cuatrimestres: [{ type: Schema.Types.ObjectId, ref: 'Cuatrimestre' }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('OfertaEducativa', ofertaEducativaSchema);
