import routerx from 'express-promise-router';
import usuarioController from '../controller/UsuarioController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', usuarioController.add);
router.get('/query',auth.verifyAdmi, usuarioController.query);
router.get('/list', auth.verifySistema, usuarioController.list);
router.put('/update',auth.verifySistema,usuarioController.update);
router.delete('/remove',auth.verifySistema, usuarioController.remove);
router.put('/activate',auth.verifySistema, usuarioController.activate);
router.put('/deactivate',auth.verifySistema, usuarioController.deactivate);
router.post('/login',usuarioController.login);

export default router;