const tokenService = require( '../services/token');

module.exports = {
    verifyUsuario: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol == 'Sistemas' || response.rol=='Editor'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdmi: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifySistema: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol=='Sistemas'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyeditor: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response=await tokenService.decode(req.headers.token);
        if (response.rol =='Administrador' || response.rol == 'Editor'){
            next();
        } else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}