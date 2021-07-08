import { Request, Response } from 'express';

const readAll = (req: Request, res: Response) => {
  return res.send('hello');
};

export default {
  readAll,
};
