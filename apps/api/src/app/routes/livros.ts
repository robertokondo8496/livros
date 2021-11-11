import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  Livro,
} from '@livros/common';

import { getCollection } from "../util/mongodb";

export const livrosRouter = Router();

livrosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const livros = await getCollection<Livro>(
    req.app,
    'livros',
  ).find().toArray();
  res.json(livros);
});
