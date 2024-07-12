import { Schema, model } from "mongoose";

const admisionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    ofertas: [{
        ref: "ofertaEducativa",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model('Admision', admisionSchema)