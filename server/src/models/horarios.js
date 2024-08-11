import mongoose from 'mongoose';

const { Schema } = mongoose;

const horarioSchema = new Schema({
    dia: {
        type: String,
        required: true
    },
    horaInicio: {
        type: String,
        required: true
    },
    horaFin: {
        type: String,
        required: true
    },
    profesores: { 
        type: Schema.Types.ObjectId, 
        ref: 'Profesor' 
    }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Horario', horarioSchema);
