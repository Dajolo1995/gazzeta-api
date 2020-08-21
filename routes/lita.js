import routerx from 'express-promise-router';
import litaController from '../controller/LitaController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', litaController.add);
router.get('/query',auth.verifyeditor,litaController.query);
router.get('/list',litaController.list);
router.put('/update',auth.verifyeditor,litaController.update);
router.delete('/remove',auth.verifyeditor,litaController.remove)
router.put('/activate',auth.verifyeditor,litaController.activate)
router.put('/deactivate',auth.verifyeditor,litaController.deactivate)

export default router;