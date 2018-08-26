import config, { nodeEnv, log } from "./config";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import compression from "compression";
import usersRouter from "./router/users";
import productsRouter from "./router/products";
import cartRouter from "./router/cart";
import categoryRouter from "./router/category";

import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import App from '../client/App';
import store from '../client/store';
import React from 'react';
import { StaticRouter, matchPath } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';
var fs = require("fs");


const server = express();

const DB = config.DB;
mongoose
  .connect(
    DB,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Error connecting to database", err);
    }
  );

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(bodyParser.json());

server.use("/products", productsRouter);
server.use("/cart", cartRouter);
server.use("/category", categoryRouter);
server.use("/users", usersRouter);

server.use(express.static("public"));
server.get("*", (req, res, next) => {
  
  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const indexFile = path.resolve('./server/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${app}</div>`);
    res.send(document);
  });

});
server.listen(config.port, () => {
  log("Express listening on port " + config.port);
});
