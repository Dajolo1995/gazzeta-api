import mongoose,{Schema} from 'mongoose';

const categoriaSchema = new Schema({
    nombre:{type:String, maxlength:50,unique:true,required:true},

});

const Categoria = mongoose.model('categoria',categoriaSchema);

export default Categoria;