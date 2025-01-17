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