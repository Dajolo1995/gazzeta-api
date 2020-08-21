import routerx from 'express-promise-router';
import editorController from '../controller/EditorController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add', editorController.add);
router.get('/query',auth.verifyeditor,editorController.query);
router.get('/list',editorController.list);
router.put('/update',auth.verifyeditor,editorController.update);
router.delete('/remove',auth.verifyeditor,editorController.remove)
router.put('/activate',auth.verifyeditor,editorController.activate)
router.put('/deactivate',auth.verifyeditor,editorController.deactivate)

export default router;