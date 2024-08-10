import mongoose from 'mongoose';

const { Schema } = mongoose;

const cursoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    profesores: [{ type: Schema.Types.ObjectId, ref: 'Profesor' }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Curso', cursoSchema);
