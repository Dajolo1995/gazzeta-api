const routerx = require('express-promise-router');
const plastilinaController = require('../controller/PlastilinaController');
const auth = require('../middlewares/auth');

const router=routerx();

router.post('/add', plastilinaController.add);
router.get('/query',plastilinaController.query);
router.get('/list',plastilinaController.list);
router.put('/update',auth.verifyeditor,plastilinaController.update);
router.delete('/remove',auth.verifyeditor,plastilinaController.remove)
router.put('/activate',auth.verifyeditor,plastilinaController.activate)
router.put('/deactivate',auth.verifyeditor,plastilinaController.deactivate)

module.exports =  router;