import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  Livro,
} from '../../../../../libs/common/src/lib/interfaces/livro';

import { getCollection } from "../util/mongodb";

export const livrosRouter = Router();

artigosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const livros = await getCollection<Livro>(
    req.app,
    'artigos',
  ).find().toArray();
  res.json(artigos);
});
