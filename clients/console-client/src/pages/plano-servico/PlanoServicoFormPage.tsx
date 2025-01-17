import { useNavigate, useParams } from "react-router-dom";
import { PlanoServico } from "../../types";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/user-feedback/LoadingSpinner";
import { PlanoServicoService } from "../../services";
import PlanoServicoCadastro from "../../components/cadastros/plano-servico/PlanoServicoCadastro";
import AlertError from "../../components/user-feedback/alert/AlertError";
import { Box } from "@mui/material";
import CommonButton from "../../components/buttons/Button";

const PlanoServicoFormPage:React.FC = () =>{
    const [loading, setLoading] = useState<boolean>(false);
    const [servico, setServico] = useState<PlanoServico>({
        nome:'',
        descricao:'',
        valor:0,
        plataformas:[]
    });
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const {id} = useParams<{id:string}>();
    const isNew = id === 'novo';
    const navigateTo = useNavigate();

    useEffect(() => {
        if(isNew) return;
        setLoading(true);
        setShowAlert(false)
        PlanoServicoService.findById(id!)
        .then(({data}) =>{ 
            setServico(data);
            setLoading(false);
        })
        .catch(err => {
            setLoading(false)
             setShowAlert(true)
        })
    },[id, isNew])

    const submit = () =>{
        setLoading(true)
        setShowAlert(false)
        PlanoServicoService.save(servico)
            .then(response => {
                setLoading(false);
                navigateTo("/servico")
            })
            .catch(err =>{
                setLoading(false)
                setShowAlert(true)
            })
    }

    const onUpdate = (name:string, value:any) =>
        setServico({...servico, [name]:value})

    return(<>
            <LoadingSpinner loading={loading}/>
            {!loading && <Box padding={5}>
                            <PlanoServicoCadastro servico={servico} updateServico={onUpdate}/>
                        </Box>}
            <Box position='absolute' right={0} bottom={0} paddingRight={5} paddingBottom={5}>
                    <CommonButton onClick={() => submit()} label="Salvar"/>
            </Box>
            {showAlert && <AlertError/>}
        
    </>)
}

export default PlanoServicoFormPage;