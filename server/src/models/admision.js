//import { Schema, model } from "mongoose";
const { Schema } = mongoose;


const admisionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    //ofertas: [{ref: "ofertaEducativa",type: Schema.Types.ObjectId}]
    ofertas: [{type: Schema.Types.ObjectId, ref: "ofertaEducativa",}]

    
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Admision', admisionSchema)
