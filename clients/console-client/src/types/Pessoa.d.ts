export type Pessoa = {
    id: number,
    nome:string,
    razaoSocial: string,
    tipoPessoa: string, 
    cpfCnpj:string,
    ativo:boolean,
    responsavel: Pessoa;
}