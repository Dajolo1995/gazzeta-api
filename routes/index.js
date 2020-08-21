import routerx from 'express-promise-router';
import categoriaRouter from './categoria';
import noticiasRouter from './noticias';
import usuarioRouter from './usuario';
import personaRouter from './persona';
import plastilinaRouter from './plastilina';
import editorRouter from './editor';
import emilyRouter from './emily';
import epayco from './epayco';
import bolitaRouter from './bolita';
import menorRouter from './menor';
import ikkarosRouter from './ikkaros';
import litaRouter from './lita';
import memesRouter from './memes';
import invitadoRouter from './invitado';




const router=routerx();

router.use('/categoria',categoriaRouter);
router.use('/noticias',noticiasRouter);
router.use('/usuario',usuarioRouter);
router.use('/persona',personaRouter);
router.use('/plastilina',plastilinaRouter);
router.use('/editor', editorRouter);
router.use('/emily', emilyRouter);
router.use('/epayco', epayco);
router.use('/bolita', bolitaRouter);
router.use('/menor', menorRouter);
router.use('/ikkaros', ikkarosRouter);
router.use('/lita', litaRouter);
router.use('/memes', memesRouter);
router.use('/invitado', invitadoRouter);


export default router;