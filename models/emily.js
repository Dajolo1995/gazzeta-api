import mongoose,{Schema} from 'mongoose';

const emilylSchema = new Schema({
    categoria:{type:Schema.ObjectId, ref:'categoria'},
    titulo:{type: String, maxlength:40, unique:true, required:true},
    autor:{type: String},
    parrafo:{type: String},
    createdAt:{type: Date, default: Date.now}

});

const Emily = mongoose.model('emily',emilylSchema);

export default Emily;