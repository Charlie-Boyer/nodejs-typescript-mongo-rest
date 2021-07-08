import http from 'http';
import express from 'express';

const router = express();
const httpServer = http.createServer(router);
