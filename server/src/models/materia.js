import mongoose from 'mongoose';

const { Schema } = mongoose;

const materiaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    ofertasEducativas: [{
        type: Schema.Types.ObjectId,
        ref: 'OfertaEducativa'
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Materia', materiaSchema);
