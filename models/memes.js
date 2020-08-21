import mongoose,{Schema} from 'mongoose';

const memesSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    pagina:{type: String},
    createdAt:{type: Date, default: Date.now},
    imagen:{type: String, required: false}

});

const Memes= mongoose.model('memes',memesSchema);

export default Memes;