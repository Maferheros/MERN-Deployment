const mongoose = require('mongoose');

const PirataSchema = new mongoose.Schema ( {
    nombre: {
        type: String,
        required: [true, "Nombre es obligatorio."],
        unique: [true, "El autor ya estaba dado de alta."]
    },
    imagen: {
        type: String,
        required: [true, "Imagen es obligatorio."],
    },
    tesoros: {
        type: Number,
        required: [true, "El número de tesoros es obligatorio."],
    },
    frase:{
        type: String,
        required: [true, "Frase es obligatorio."],
    },
    posicion:{
        type: String,
        required: [true, "Crew Position es obligatorio."],
    },
    pierna: {
        type: Boolean,
        default: true
    },
    ojo: {
        type:Boolean,
        default: true
    },
    mano: {
        type:Boolean,
        default: true
    }

}, {timestamps: true, versionKey: false} )

const Pirata = mongoose.model ( 'piratas', PirataSchema);
module.exports = Pirata;