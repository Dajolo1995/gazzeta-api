const models = require( '../models');
const bcrypt = require( 'bcryptjs');
const token = require( '../services/token');
module.exports = {
    add: async (req,res,next) =>{
        try {
            req.body.password = await bcrypt.hash(req.body.password,10)
            const reg = await models.Persona.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            const reg=await models.Persona.findOne({_id:req.query._id});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) => {
        try {
            let valor=req.query.valor;
              const reg=await models.Persona.find({})
 //           const reg=await models.Usuario.find({'nombre':new regExp(valor,'i')},{'email': new regExp(valor,'i')})
            res.status(200).send(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            let pas = req.body.password;
            const reg0= await models.Persona.findOne({_id:req.body._id});
            if(pas!=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10);
            }
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre, email:req.body.email, password:req.body.password, rol:req.body.rol, estado: req.body.estado});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Persona.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate:async (req,res,next) => {
        try {
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    login: async (req,res,next) => {
        try {
            let user = await models.Persona.findOne({email:req.body.email,estado:1});
            if (user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if (match){
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({user,tokenReturn});
                } else{
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else{
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
