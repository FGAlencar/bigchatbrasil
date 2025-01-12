package com.grupoirrah.bigchatbrasil.contexts.planocontratado;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano.PlanoContratado;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.recarga.PlanoContratadoRecarga;
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

    public PlanoContratado novaRecarga(Long idPlanoContratado, PlanoContratadoRecarga recarga){
        PlanoContratado planoContratado = this.findById(idPlanoContratado);
        planoContratado.novaRecarga(recarga);
        return this.save(planoContratado);
    }
}
