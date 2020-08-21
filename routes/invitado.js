import routerx from 'express-promise-router';
import invitadoController from '../controller/InvitadoController';
import auth from '../middlewares/auth'
import upload from '../middlewares/upload'

const router=routerx();

router.post('/add', upload.uploadFile, invitadoController.add);
router.get('/query',auth.verifyeditor,invitadoController.query);
router.get('/list',invitadoController.list);
router.put('/update',auth.verifyeditor,invitadoController.update);
router.delete('/remove',auth.verifyeditor,invitadoController.remove)
router.put('/activate',auth.verifyeditor,invitadoController.activate)
router.put('/deactivate',auth.verifyeditor,invitadoController.deactivate)
router.get('/obtenerImagen', invitadoController.obtenerImagen);

export default router;