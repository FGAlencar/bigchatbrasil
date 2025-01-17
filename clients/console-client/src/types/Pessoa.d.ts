export type Pessoa = {
    id?: number,
    nome:string,
    razaoSocial: string,
    tipoPessoa: string, 
    cpfCnpj:string,
    ativo:boolean,
    responsavel?: Pessoa;
    contatoTelefones?: ContatoTelefone[],
    enderecos?: Endereco[],
    emails?:ContatoEmail[]
}

export type Endereco = {
    id?:number;
    rua:string;
    numero:string;
    complemento:string;
    bairro:string;
    cidade:string;
    estado:string;
    uf:string;
    principal: boolean;
    correspondencia: boolean;
}

export type ContatoTelefone = {
    id?:number;
    ddd:string;
    numero:string;
    whatsApp:boolean;
    principal:boolean;
}

export type ContatoEmail = {
    id?: number;
    email:string;
    principal:boolean;
}

export type PessoaForm=Partial<Pessoa>