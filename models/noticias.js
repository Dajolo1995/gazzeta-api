import mongoose,{Schema} from 'mongoose';

const noticiasSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    autor:{type: String},
    parrafoUno:{type: String},
    parrafoDos:{type: String},
    parrafoTres:{type: String},
    createdAt:{type: Date, default: Date.now},
    imagen:{type: String, required: false}

});

const Noticias = mongoose.model('noticias',noticiasSchema);

export default Noticias;