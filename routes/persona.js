import routerx from 'express-promise-router';
import personaController from '../controller/PersonaController';
import auth from '../middlewares/auth'

const router=routerx();

router.post('/add',auth.verifySistema, personaController.add);
router.get('/query',auth.verifySistema, personaController.query);
router.get('/list', auth.verifySistema, personaController.list);
router.put('/update',auth.verifySistema,personaController.update);
router.delete('/remove',auth.verifySistema, personaController.remove);
router.put('/activate',auth.verifySistema, personaController.activate);
router.put('/deactivate',auth.verifySistema, personaController.deactivate);
router.post('/login',personaController.login);

export default router;