package com.grupoirrah.bigchatbrasil.contexts.planocontratado;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.PlanoServicoExecucaoRequest;
import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.PlanoServicoExecucaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlanoContratadoService extends CrudService<PlanoContratado, Long> {
    @Autowired
    private PlanoServicoExecucaoService execucaoService;

    public void executarServico(PlanoServicoExecucaoRequest request){
        this.execucaoService.executeRequest(request);
    }
}
