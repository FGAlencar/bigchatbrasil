import { Plano } from "./Plano";

export type PlanoContratado={
    id?: number,
    plano:Plano,
    valorUtilizado: number,
    valorDisponivel: number,
}