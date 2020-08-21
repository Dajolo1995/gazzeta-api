import routerx from 'express-promise-router';
import menorController from '../controller/MenorController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', menorController.add);
router.get('/query',auth.verifyeditor,menorController.query);
router.get('/list',menorController.list);
router.put('/update',auth.verifyeditor,menorController.update);
router.delete('/remove',auth.verifyeditor,menorController.remove)
router.put('/activate',auth.verifyeditor,menorController.activate)
router.put('/deactivate',auth.verifyeditor,menorController.deactivate)

export default router;