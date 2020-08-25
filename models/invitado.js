const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invitadoSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    autor:{type: String},
    parrafo:{type: String},
    parrafoDos:{type: String},
    parrafoTres:{type: String},
    parrafoCuatro:{type: String},
    parrafoCinco:{type: String},
    parrafoSeis:{type: String},
    parrafoSiete:{type: String},
    parrafoOcho:{type: String},
    parrafoNueve:{type: String},
    parrafoDiez:{type: String},
    parrafoOnce:{type: String},
    createdAt:{type: Date, default: Date.now},
    imagen:{type: String, required: false}

});

const Invitado = mongoose.model('invitado',invitadoSchema);

module.exports = Invitado;