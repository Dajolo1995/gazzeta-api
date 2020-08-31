const routerx = require('express-promise-router');
const menorController = require('../controller/MenorController');
const auth = require('../middlewares/auth');

const router=routerx();

router.post('/add', menorController.add);
router.get('/query',menorController.query);
router.get('/list',menorController.list);
router.put('/update',auth.verifyeditor,menorController.update);
router.delete('/remove',auth.verifyeditor,menorController.remove)
router.put('/activate',auth.verifyeditor,menorController.activate)
router.put('/deactivate',auth.verifyeditor,menorController.deactivate)

module.exports = router;