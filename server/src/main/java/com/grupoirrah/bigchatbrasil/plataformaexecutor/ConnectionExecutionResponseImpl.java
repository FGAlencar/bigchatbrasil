package com.grupoirrah.bigchatbrasil.plataformaexecutor;

import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.StatusReceptor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ConnectionExecutionResponseImpl implements ConnectionExecutionResponse{
    private StatusReceptor status;
    private String message;

    @Override
    public StatusReceptor status() {
        return status;
    }

    @Override
    public String message() {
        return message;
    }
}
