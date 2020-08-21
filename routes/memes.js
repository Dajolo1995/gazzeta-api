import routerx from 'express-promise-router';
import memesController from '../controller/MemesController';
import auth from '../middlewares/auth'
import upload from '../middlewares/upload'

const router=routerx();

router.post('/add', upload.uploadFile, memesController.add);
router.get('/query',auth.verifyeditor,memesController.query);
router.get('/list',memesController.list);
router.put('/update',auth.verifyeditor,memesController.update);
router.delete('/remove',auth.verifyeditor,memesController.remove)
router.put('/activate',auth.verifyeditor,memesController.activate)
router.put('/deactivate',auth.verifyeditor,memesController.deactivate)
router.get('/obtenerImagen', memesController.obtenerImagen);

export default router;