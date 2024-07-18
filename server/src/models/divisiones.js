import mongoose from 'mongoose';

const { Schema } = mongoose;

const divisionesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    ofertas: [{ type: Schema.Types.ObjectId, ref: 'OfertasEducativas' }] // Relacion de ofertas educativas con divisiones
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('divisiones', divisionesSchema);
