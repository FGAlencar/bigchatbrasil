import axios, { AxiosPromise } from "axios"
import { PlanoServico } from "../types"
import { Pagination } from "../types/config/Pagination"

export const findAll = (
    servico?: Partial<PlanoServico>,  
    pagination:Pagination = {page:0, size:20}): AxiosPromise<any> =>
    axios.get('/api/plano-servico', {
        params:{
            ...pagination
        }
    })

export const findAllPlataformas = (): AxiosPromise<string[]> =>
    axios.get('/api/plano-servico/plataformas')

export const findById = (id: string | number):AxiosPromise<PlanoServico> =>
    axios.get(`/api/plano-servico/${id}`)

export const remove = (id: string | number): AxiosPromise<void> =>
    axios.delete(`/api/plano-servico/${id}`)

export const save = (entity: PlanoServico): AxiosPromise<PlanoServico> =>
    entity.id 
        ? axios.put(`/api/plano-servico/${entity.id}`, entity)
        : axios.post("/api/plano-servico", entity);