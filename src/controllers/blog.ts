import { Request, Response } from 'express';
import User from '../models/user';

const readAll = (req: Request, res: Response) => {
  User.find();
  return res.send('hello');
};

export default {
  readAll,
};
