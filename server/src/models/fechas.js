import mongoose from 'mongoose';

const { Schema } = mongoose;

const fechaSchema = new Schema({
    fecha: {
        type: String,
    },
    horaInicio: {
        type: String,
    },
    horaFinal: {
        type: String,
    },
    profesor: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }],
}, {
    timestamps: true,
    versionKey: false
});


export default mongoose.model('fecha', fechaSchema);
