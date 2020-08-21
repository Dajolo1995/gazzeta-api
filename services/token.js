import jwt from 'jsonwebtoken';
import models from '../models';
import jwtconfig from '../config/jwt'

async function checkToken(token){
    try{
        const {user:_id}= await jwt.decode(token);
        const user = await models.Usuario.findOne({_id,estado:1});

        if (user){
            const token = jwt.sign({user},jwtconfig.clave,{expiresIn:'30d'});
            return {token,rol:user.rol};
        } else {
            return false;
        }
    } catch (e){
        return false;
    }
    
}

export default {
    encode: async (user) => {
        const token = jwt.sign({user},jwtconfig.clave,{expiresIn: '30d'});
        return token;
    },
    decode: async (token) => {
        try {
            const {user:_id} = await jwt.verify(token,jwtconfig.clave);
            const user = await models.Usuario.findOne({_id,estado:1});
            if (user){
                return user;
            } else{
                return false;
            }
        } catch (e){
            const newToken = await checkToken(token);
            return newToken;
        }
    }
}