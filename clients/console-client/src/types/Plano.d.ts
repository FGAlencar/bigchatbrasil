import { PlanoServico } from "./types/PlanoServico";

export type Plano={
    id: number;
    nome:string,
    descricao: string,
    dataInicial: string,
    dataFinal: string,
    ativo: boolean,
    servicos: PlanoServico[]
}