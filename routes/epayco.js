import routerx from 'express-promise-router';
import {getPayment} from '../controller/ePaycoController';

// import upload from '../middlewares/upload'

const router=routerx();

router.post('/donaciones', getPayment);


export default router;