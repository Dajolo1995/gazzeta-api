const routerx = require( 'express-promise-router');
const {getPayment} = require( '../controller/ePaycoController');

// const upload = require( '../middlewares/upload');

const router=routerx();

router.post('/donaciones', getPayment);


module.exports =  router;