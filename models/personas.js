import mongoose, {Schema} from 'mongoose';
const personaSchema = new Schema({
    nombre: {type:String, maxlength:50, unique:true, required:true},
    telefono:{type: String, maxlength:20},
    email:{type: String, maxlength:50, unique:true, required:true},
    password:{type:String, maxlength:64, required:true},
    estado:{type:Number, default:1},
    createdAt:{type:Date, default: Date.now}
});

const Persona = mongoose.model('persona', personaSchema);
export default Persona;