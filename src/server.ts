import http from 'http';
import express from 'express';
import config from './config/config';
import mongoose from 'mongoose';
import userRoutes from './routes/blog';

const router = express();

/** Server Handling */
const httpServer = http.createServer(router);

/** Connect database */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then(() => {
    console.log('Mongo Connected');
  })
  .catch((error) => {
    console.log(error);
  });

/** Routes */
router.use('/blog', userRoutes);

/** Server listen */
httpServer.listen(config.server.port, () => console.log('server running'));
