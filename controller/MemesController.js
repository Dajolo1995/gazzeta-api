import models from '../models';
import fs from "fs"
import path from 'path'



export default {
    add: async (req,res,next) =>{
        
        const memes = JSON.parse(req.body.memes);
        const path = req.files[0].filename;
        
        const body = {
            titulo: memes.titulo, 
            pagina: memes.pagina, 
            imagen: path
        }
        try {
            const reg = await models.Memes.create(body);
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
            const reg=await models.Memes.findOne({_id:req.query._id})
            .populate('categoria',{nombre:1});
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
            const reg=await models.Memes.find({})
            .populate('categoria',{nombre:1})
            .sort({'createdAt':-1})
            console.log(reg)
            return res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Memes.findByIdAndUpdate({_id:req.body._id},{categoria:req.body.categoria, titulo:req.body.titulo, autor:req.body.autor, parrafo:req.body.parrafo, createdAt:req.body.createdAt});
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
            const reg = await models.Memes.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Memes.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Memes.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    obtenerImagen:async(req,res) =>{
        const mime = {
            gif: 'image/gif',
            jpg: 'image/jpeg',
            png: 'image/png',
            svg: 'image/svg+xml',
        };
        
        try {
            const link = req.query.link
            var dir = path.join(__dirname, '../', 'public', 'files');
            console.log(dir)
            const file = path.join(dir, link);
            console.log(file)
            const type = mime[path.extname(file).slice(1)] || 'text/plain';
            return res.sendFile(file);

        } catch (error) {
            console.log(error)
           return res.status(500).send(error);  
           
        }

    }
}
