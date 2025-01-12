package com.grupoirrah.bigchatbrasil.plataformaexecutor;

import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.StatusReceptor;

public interface PlataformaExecutor{
    Receptor prepareReceptor(Receptor receptor);
    ConnectionExecutor createConnection();
    default  Receptor updateReceptor(Receptor receptor, ConnectionExecutionResponse response) {
        receptor.setStatus(response.status());

        if(StatusReceptor.ERRO.equals(response.status())){
            receptor.setMensagemErro(response.message());
        }

        return receptor;
    }
}
