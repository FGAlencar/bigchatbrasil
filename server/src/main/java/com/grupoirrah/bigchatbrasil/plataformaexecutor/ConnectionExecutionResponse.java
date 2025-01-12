package com.grupoirrah.bigchatbrasil.plataformaexecutor;

import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.StatusReceptor;

public interface ConnectionExecutionResponse {
    StatusReceptor status();
    String message();
}
