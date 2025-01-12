package com.grupoirrah.bigchatbrasil.plataformaexecutor;

import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.StatusReceptor;

public interface Receptor {
    StatusReceptor getStatus();
    void setStatus(StatusReceptor status);
    String  getMensagemErro();
    void setMensagemErro(String mensagemErro);
}
