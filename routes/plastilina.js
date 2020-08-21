import routerx from 'express-promise-router';
import plastilinaController from '../controller/PlastilinaController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', plastilinaController.add);
router.get('/query',auth.verifyeditor,plastilinaController.query);
router.get('/list',plastilinaController.list);
router.put('/update',auth.verifyeditor,plastilinaController.update);
router.delete('/remove',auth.verifyeditor,plastilinaController.remove)
router.put('/activate',auth.verifyeditor,plastilinaController.activate)
router.put('/deactivate',auth.verifyeditor,plastilinaController.deactivate)

export default router;