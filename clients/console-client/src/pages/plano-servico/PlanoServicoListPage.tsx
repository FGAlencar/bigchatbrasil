import React, { useEffect, useState } from "react";
import CommonTable, { TableColumn } from "../../components/table/CommonTable";
import LoadingSpinner from "../../components/user-feedback/LoadingSpinner";
import { PlanoServico } from "../../types";
import { Pagination } from "../../types/config/Pagination";
import { PlanoServicoService } from "../../services";
import AlertError from "../../components/user-feedback/alert/AlertError";



const PlanoServicoListPage:React.FC = () =>{
    const [loading, setLoading] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<AlertControl>({
            open:false, title:'', message:''
        });
    const [tableData, setTableData] = useState<{
        columns: TableColumn[],
        data?:any[]
    }>({
        columns:[
            { label:'Código', column:'id'},
            { label:'Nome', column:'nome'},
            { label: 'Valor', column:'valor'}
        ],
        data:undefined
    })
    
    const openErrorAlert = (title:string, message:string) =>
        setShowAlert({
            title, message, open:true
        })

    const closeErrorAlert = () =>
        setShowAlert({
            title:'', message:'', open:false
        })


    const fetchData = (servico?: Partial<PlanoServico>, pagination?: Pagination) =>{
        setLoading(true);
        closeErrorAlert();
        PlanoServicoService.findAll(servico, pagination)
        .then(response =>{
            setLoading(false)
            setTableData({...tableData, data:response.data.content})
        })
        .catch(err =>{
            setLoading(false)
            console.log(err)
            openErrorAlert('Ops...', 'Não foi possível consultar os dados. Entre em contato com o suporte!')

        })
    }
            

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    },[])

    const mountErrorAlert = () => 
        <AlertError title={showAlert.title} message={showAlert.message}/>

    return(
        <>  <LoadingSpinner loading={loading}/>
        
            <CommonTable 
                columns={tableData.columns} 
                data={tableData.data ?? []}
            />
            {showAlert && showAlert.open &&  mountErrorAlert()}
        </>
    )
}

export default PlanoServicoListPage;