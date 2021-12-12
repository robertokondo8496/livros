import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import {
  ILivro,
} from '@livros/common';

import { getCollection } from "../util/mongodb";

export const livrosRouter = Router();

livrosRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const livros = await getCollection<ILivro>(
    req.app,
    'livros',
  ).find().toArray();
  res.json(livros);
});

livrosRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const livro = await getCollection<ILivro>(
    req.app,
    'livros',
  ).findOne({
    _id: _id,
  });
  res.json(livro);
});

livrosRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: ILivro = req.body;
  const results = await getCollection<ILivroo>(
    req.app,
    'livros',
  ).findOneAndReplace({
    _id: _id,
  }, body);
  res.json(results);
});
