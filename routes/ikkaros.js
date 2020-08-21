import routerx from 'express-promise-router';
import ikkarosController from '../controller/IkkarosController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', ikkarosController.add);
router.get('/query',auth.verifyeditor,ikkarosController.query);
router.get('/list',ikkarosController.list);
router.put('/update',auth.verifyeditor,ikkarosController.update);
router.delete('/remove',auth.verifyeditor,ikkarosController.remove)
router.put('/activate',auth.verifyeditor,ikkarosController.activate)
router.put('/deactivate',auth.verifyeditor,ikkarosController.deactivate)

export default router;