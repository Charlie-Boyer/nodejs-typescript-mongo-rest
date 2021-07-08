import http from 'http';
import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';

const router = express();
const httpServer = http.createServer(router);

/** Connect database */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then(() => console.log('connected'))
  .catch((error) => console.log(`an error occured ${error}`));

/** Server listen */
httpServer.listen(config.server.port, () => 'server connected');
