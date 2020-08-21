import mongoose,{Schema} from 'mongoose';

// la niña emily


const plastilinaSchema = new Schema({
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
    parrafoDies:{type: String},
    parrafoOnce:{type: String},       
    createdAt:{type: Date, default: Date.now}

});

const Plastilina = mongoose.model('plastilina',plastilinaSchema);

export default Plastilina;