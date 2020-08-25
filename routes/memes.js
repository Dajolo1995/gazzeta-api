const routerx = require('express-promise-router');
const memesController = require('../controller/MemesController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const router=routerx();

router.post('/add', upload.uploadFile, memesController.add);
router.get('/query',auth.verifyeditor,memesController.query);
router.get('/list',memesController.list);
router.put('/update',auth.verifyeditor,memesController.update);
router.delete('/remove',auth.verifyeditor,memesController.remove)
router.put('/activate',auth.verifyeditor,memesController.activate)
router.put('/deactivate',auth.verifyeditor,memesController.deactivate)
router.get('/obtenerImagen', memesController.obtenerImagen);

module.exports =  router;