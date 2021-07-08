import express from 'express';
import controller from '../controllers/blog';

const router = express.Router();

router.get('/', controller.readAll);

export = router;
