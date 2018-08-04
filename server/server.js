import config, {nodeEnv, log} from './config';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRouter from './router/users';
import productsRouter from './router/products';
import cartRouter from './router/cart';

const server = express();

const DB =  config.DB;
mongoose.connect(DB, {useNewUrlParser: true})
         .then(
             () => {console.log('Database is connected')},
             err => {console.log('Error connecting to database',err)}
         )

server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
    
server.use(express.static(path.resolve(__dirname, '../public')));
server.use('/products', productsRouter);
server.use('/cart', cartRouter);
server.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
  });
  

server.use('/users', usersRouter);


server.use(express.static('public'));

server.listen(config.port, () => {
    log("Express listening on port "+config.port);
});

