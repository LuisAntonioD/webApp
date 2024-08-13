import mongoose from 'mongoose';

const { Schema } = mongoose;

const fechaSchema = new Schema({
    fecha: {
        type: String,
        required: true
    },
    horaInicio: {
        type: String,
        required: true
    },
    horaFinal: {
        type: String,
        required: true
    },
    profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }],
}, {
    timestamps: true,
    versionKey: false
});


export default mongoose.model('fecha', admisionSchema);
