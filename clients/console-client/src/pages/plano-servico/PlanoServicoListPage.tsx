import React, { ReactNode, useEffect, useState } from "react";
import CommonTable, { TableColumn } from "../../components/table/CommonTable";
import LoadingSpinner from "../../components/user-feedback/LoadingSpinner";
import { PlanoServico } from "../../types";
import { Pagination } from "../../types/config/Pagination";
import { PlanoServicoService } from "../../services";
import AlertError from "../../components/user-feedback/alert/AlertError";
import CommonButton from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";



const PlanoServicoListPage:React.FC = () =>{
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [tableData, setTableData] = useState<{
        columns: TableColumn[],
        data?:any[],
        action?:(element:any) => ReactNode
    }>({
        columns:[
            { label:'Código', column:'id', renderComponent: (value => <>{value}</>)},
            { label:'Nome', column:'nome',renderComponent: (value => <>{value}</>)},
            { label:'Descrição', column:'descricao',renderComponent: (value => <>{value}</>)},
            { label: 'Valor', column:'valor',renderComponent: (value => <>R${String(Number(value).toFixed(2)).replace('.',',')}</>)}
        ],
        action: (element:any) => (
            < div style={{position:'relative',display:'flex', justifyContent:'start', gap:10}}>
                <CommonButton onClick={() => navigateTo('/servico/'+element.id)} label="Editar"/>
                <CommonButton onClick={() => PlanoServicoService.remove(element.id)} label="Remover" variant="outlined"/>
            </div>),
        data:undefined
    })
    
    const fetchData = (servico?: Partial<PlanoServico>, pagination?: Pagination) =>{
        setLoading(true);
        setShowAlert(false)
        PlanoServicoService.findAll(servico, pagination)
        .then(response =>{
            setLoading(false)
            setTableData({...tableData, data:response.data.content})
        })
        .catch(err =>{
            setLoading(false)
            setShowAlert(true)

        })
    }
            

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <>  
            <Box display={'flex'} flexDirection={'column'}>
                <LoadingSpinner loading={loading}/>
                
                <CommonTable 
                    columns={tableData.columns} 
                    data={tableData.data ?? []}
                    action={tableData.action}
                />
                <Box position='absolute' width={'97%'} paddingBottom={8}bottom={0} display={'flex'} justifyContent={'end'}>
                    <CommonButton onClick={() => navigateTo('/servico/novo')}label="Novo"/>
                </Box>
                {showAlert && <AlertError/>}
            </Box>
        </>
    )
}

export default PlanoServicoListPage;