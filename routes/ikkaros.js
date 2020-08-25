const routerx = require( 'express-promise-router');
const ikkarosController = require( '../controller/IkkarosController');
const auth = require( '../middlewares/auth');

const router=routerx();

router.post('/add', ikkarosController.add);
router.get('/query',auth.verifyeditor,ikkarosController.query);
router.get('/list',ikkarosController.list);
router.put('/update',auth.verifyeditor,ikkarosController.update);
router.delete('/remove',auth.verifyeditor,ikkarosController.remove)
router.put('/activate',auth.verifyeditor,ikkarosController.activate)
router.put('/deactivate',auth.verifyeditor,ikkarosController.deactivate)

module.exports =  router;