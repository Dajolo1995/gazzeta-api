const routerx = require('express-promise-router');
const editorController = require('../controller/EditorController');
const auth = require('../middlewares/auth')

const router=routerx();

router.post('/add', editorController.add);
router.get('/query',editorController.query);
router.get('/list',editorController.list);
router.put('/update',auth.verifyeditor,editorController.update);
router.delete('/remove',auth.verifyeditor,editorController.remove)
router.put('/activate',auth.verifyeditor,editorController.activate)
router.put('/deactivate',auth.verifyeditor,editorController.deactivate)

module.exports =  router;