const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombre:{type:String, maxlength:50,unique:true,required:true},

});

const Categoria = mongoose.model('categoria',categoriaSchema);

module.exports =  Categoria;