import mongoose from 'mongoose';

const { Schema } = mongoose;

const cuatrimestreSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    materias: [{ type: Schema.Types.ObjectId, ref: 'Materia' }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Cuatrimestre', cuatrimestreSchema);
