const routerx = require('express-promise-router');
const noticiasController = require('../controller/NoticiaController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const router=routerx();

router.post('/add' , upload.uploadFile, noticiasController.add);
router.get('/query',noticiasController.query);
router.get('/list',noticiasController.list);
router.put('/update',auth.verifyeditor,noticiasController.update);
router.delete('/remove',auth.verifyeditor,noticiasController.remove)
router.put('/activate',auth.verifyeditor,noticiasController.activate)
router.put('/deactivate',auth.verifyeditor,noticiasController.deactivate)
router.get('/obtenerImagen', noticiasController.obtenerImagen);

module.exports =  router;