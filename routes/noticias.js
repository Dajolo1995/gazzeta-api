import routerx from 'express-promise-router';
import noticiasController from '../controller/NoticiaController';
import auth from '../middlewares/auth'
import upload from '../middlewares/upload'

const router=routerx();

router.post('/add' , upload.uploadFile, noticiasController.add);
router.get('/query',auth.verifyeditor,noticiasController.query);
router.get('/list',noticiasController.list);
router.put('/update',auth.verifyeditor,noticiasController.update);
router.delete('/remove',auth.verifyeditor,noticiasController.remove)
router.put('/activate',auth.verifyeditor,noticiasController.activate)
router.put('/deactivate',auth.verifyeditor,noticiasController.deactivate)
router.get('/obtenerImagen', noticiasController.obtenerImagen);

export default router;