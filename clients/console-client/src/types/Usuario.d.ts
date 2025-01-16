import { Pessoa } from "./Pessoa"
import { PlanoContratado } from "./PlanoContratado"

export type Usuario ={
    id:number,
    planos: PlanoContratado[],
    pessoa: Pessoa[]
}