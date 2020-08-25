const routerx = require( 'express-promise-router');
const categoriaRouter = require( './categoria');
const noticiasRouter = require( './noticias');
const usuarioRouter = require( './usuario');
const personaRouter = require( './persona');
const plastilinaRouter = require( './plastilina');
const editorRouter = require( './editor');
const emilyRouter = require( './emily');
const epayco = require( './epayco');
const bolitaRouter = require( './bolita');
const menorRouter = require( './menor');
const ikkarosRouter = require( './ikkaros');
const litaRouter = require( './lita');
const memesRouter = require( './memes');
const invitadoRouter = require( './invitado');




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


module.exports =  router;