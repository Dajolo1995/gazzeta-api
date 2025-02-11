const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// El hermano menor


const litaSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    autor:{type: String},
    parrafoUno:{type: String},
    parrafoDos:{type: String},
    parrafoTres:{type: String},
    createdAt:{type: Date, default: Date.now}

});

const Lita = mongoose.model('lita', litaSchema);

module.exports =  Lita;