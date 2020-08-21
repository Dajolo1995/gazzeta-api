//import express from 'express';
const express=require('express');
//import morgan from 'morgan';
const morgan=require('morgan');
//import cors from 'cors';
const cors=require('cors')
const path  = require('path');
import mongoose from 'mongoose';
import router from './routes';
const history = require('connect-history-api-fallback');
//Conexion a la base de datos
mongoose.Promise=global.Promise;
const dbUrl='mongodb://daniel:123456D@ds161210.mlab.com:61210/gazzeta';
mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true})
.then(mongoose => console.log('conectando a la Bd puerto 27017'))
.catch(err => console.log(err));


const app=express();
app.use(morgan('dev'));
app.use(cors(''));

app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(express.static(path.join(__dirname,'\\public')))

app.use('/api',router);
// Middleware for serving '/dist' dir
const staticFileMiddleware = express.static('dist');

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

// Support history api 
app.use(history({
  index: '/dist/index.html'
}));

// 2nd call for redirected requests
app.use(staticFileMiddleware);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('Server On port ' + app.get('port'))
})