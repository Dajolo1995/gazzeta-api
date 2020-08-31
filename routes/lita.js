const routerx = require('express-promise-router');
const litaController = require('../controller/LitaController');
const auth = require('../middlewares/auth');

const router=routerx();

router.post('/add', litaController.add);
router.get('/query',litaController.query);
router.get('/list',litaController.list);
router.put('/update',auth.verifyeditor,litaController.update);
router.delete('/remove',auth.verifyeditor,litaController.remove)
router.put('/activate',auth.verifyeditor,litaController.activate)
router.put('/deactivate',auth.verifyeditor,litaController.deactivate)

module.exports =  router;