const routerx = require('express-promise-router');
const usuarioController = require('../controller/UsuarioController');
const auth = require('../middlewares/auth');

const router=routerx();

router.post('/add',auth.verifyAdmi, usuarioController.add);
router.get('/query',auth.verifyAdmi, usuarioController.query);
router.get('/list', auth.verifySistema, usuarioController.list);
router.put('/update',auth.verifySistema,usuarioController.update);
router.delete('/remove',auth.verifyAdmi, usuarioController.remove);
router.put('/activate',auth.verifySistema, usuarioController.activate);
router.put('/deactivate',auth.verifySistema, usuarioController.deactivate);
router.post('/login',usuarioController.login);

router.get('/prueba', usuarioController.prueba)

module.exports =  router;