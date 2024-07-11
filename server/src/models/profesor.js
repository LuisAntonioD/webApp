import mongoose from 'mongoose';

const { Schema } = mongoose;

const profesorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son obligatorios'],
    },
    numeroEmpleado: {
        type: String,
        required: [true, 'El número de empleado es obligatorio'],
        unique: true,
        match: [/^\d{10}$/, 'El número de empleado debe ser numérico y tener 10 dígitos'],
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un correo electrónico válido'],
    },
    fechaNacimiento: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria'],
        validate: {
            validator: function (value) {
                return value < new Date(new Date().setFullYear(new Date().getFullYear() - 18));
            },
            message: 'El profesor debe ser mayor de 18 años',
        },
    },
    telefono: { // Nuevo campo agregado de issue #70
        type: String,
        required: [true, 'El teléfono es obligatorio'],
        match: [/^\d{10}$/, 'El teléfono debe ser numérico y tener 10 dígitos'],
    }
}, {
    timestamps: true,
    versionKey: false,
});

// Hook para normalizar datos antes de guardar
profesorSchema.pre('save', function (next) {
    this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLowerCase();
    this.apellidos = this.apellidos.split(' ').map(apellido => apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase()).join(' ');
    next();
});

export default mongoose.model('Profesor', profesorSchema);