const routerx = require( 'express-promise-router');
const categoriaController = require( '../controller/CategoriaController');
const auth = require( '../middlewares/auth');

const router=routerx();

// router.post('/add',auth.verifySistema, categoriaController.add);
router.post('/add', categoriaController.add);
router.get('/query',categoriaController.query);
//router.get('/list',auth.verifySistema, categoriaController.list);
router.get('/list',categoriaController.list);
router.put('/update',auth.verifySistema,categoriaController.update);
router.delete('/remove',auth.verifySistema,categoriaController.remove)
router.put('/activate',auth.verifySistema, categoriaController.activate)
router.put('/deactivate',auth.verifySistema, categoriaController.deactivate)

module.exports = router;  