import mongoose,{Schema} from 'mongoose';

const bolitaSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    pagina:{type: String},
    createdAt:{type: Date, default: Date.now},
    imagen:{type: String, required: false}

});

const Bolita = mongoose.model('bolita',bolitaSchema);

export default Bolita;