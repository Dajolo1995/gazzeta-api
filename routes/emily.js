const routerx = require( 'express-promise-router');
const emilyController = require( '../controller/EmilyController');
const auth = require( '../middlewares/auth')

const router=routerx();

router.post('/add', emilyController.add);
router.get('/query',auth.verifyeditor,emilyController.query);
router.get('/list',emilyController.list);
router.put('/update',auth.verifyeditor,emilyController.update);
router.delete('/remove',auth.verifyeditor,emilyController.remove)
router.put('/activate',auth.verifyeditor,emilyController.activate)
router.put('/deactivate',auth.verifyeditor,emilyController.deactivate)

module.exports =  router;