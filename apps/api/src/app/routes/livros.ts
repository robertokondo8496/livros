import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  ILivro,
} from '../../../../../libs/common/src/lib/interfaces/livro';

import { getCollection } from "../util/mongodb";

export const livrosRouter = Router();

livrosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const livros = await getCollection<ILivro>(
    req.app,
    'livros',
  ).find().toArray();
  res.json(livros);
});
