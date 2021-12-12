import { ILivro } from "@livros/common";
export class Livro {

  public static fromJson(iLivro: ILivro): Livro {
    return new Artigo(
      iLivro._id,
      iLivro.imagem,
      iLivro.titulo,
      iLivro.descricao,
      iLivro.url,
    );
  }
  constructor(
    public readonly id: number,
    public imagem: string,
    public titulo: string,
    public descricao: string,
    public url: string,
  ) {
  }

  public asJson(): ILivro {
    return {
      _id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      imagem: this.imagem,
      url: this.url,
    };
  }

}
