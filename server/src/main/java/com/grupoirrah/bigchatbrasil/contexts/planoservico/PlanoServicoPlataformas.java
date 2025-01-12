package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.plataformaexecutor.PlataformaExecutor;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.SMSSender;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.WhatsAppSender;
import lombok.Getter;

@Getter
public enum PlanoServicoPlataformas {
    SMS(new SMSSender()),
    WHATSAPP(new WhatsAppSender());

    private final PlataformaExecutor executor;
    PlanoServicoPlataformas(PlataformaExecutor executor) {
        this.executor = executor;
    }
}
