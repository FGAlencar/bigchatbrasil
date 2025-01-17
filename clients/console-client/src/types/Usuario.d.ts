import { Pessoa, PessoaForm } from "./Pessoa"
import { PlanoContratado } from "./PlanoContratado"

export type Usuario ={
    id?:number,
    planos: PlanoContratado[],
    pessoa: Pessoa,
    dadosLogin:DadosLogin
}

export type DadosLogin={
    id?: number,
    login:string,
    senha:string,
    emailRedefinicao:string
}

export type UsuarioForm = {
    pessoa?:PessoaForm,
    dadosLogin?: DadosLoginForm
    planos?:Partial<PlanoContratado>[]
}

export type DadosLoginForm= Partial<DadosLogin>