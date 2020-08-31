const routerx = require( 'express-promise-router');
const invitadoController = require( '../controller/InvitadoController');
const auth = require( '../middlewares/auth');
const upload = require( '../middlewares/upload');

const router=routerx();

router.post('/add', upload.uploadFile, invitadoController.add);
router.get('/query',invitadoController.query);
router.get('/list',invitadoController.list);
router.put('/update',auth.verifyeditor,invitadoController.update);
router.delete('/remove',auth.verifyeditor,invitadoController.remove)
router.put('/activate',auth.verifyeditor,invitadoController.activate)
router.put('/deactivate',auth.verifyeditor,invitadoController.deactivate)
router.get('/obtenerImagen', invitadoController.obtenerImagen);

module.exports =  router;