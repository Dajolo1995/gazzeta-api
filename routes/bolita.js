const routerx = require( 'express-promise-router')
const bolitaController = require( '../controller/BolitaController')
const auth = require( '../middlewares/auth')
const upload = require( '../middlewares/upload')

const router=routerx();

router.post('/add', upload.uploadFile, bolitaController.add);
router.get('/query',auth.verifyeditor,bolitaController.query);
router.get('/list',bolitaController.list);
router.put('/update',auth.verifyeditor,bolitaController.update);
router.delete('/remove',auth.verifyeditor,bolitaController.remove)
router.put('/activate',auth.verifyeditor,bolitaController.activate)
router.put('/deactivate',auth.verifyeditor,bolitaController.deactivate)
router.get('/obtenerImagen', bolitaController.obtenerImagen);

module.exports = router;