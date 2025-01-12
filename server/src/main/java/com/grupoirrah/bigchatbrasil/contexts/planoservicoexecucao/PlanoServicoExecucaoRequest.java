package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanoServicoExecucaoRequest {
    private Long idPlanoContratado;
    private Long idServico;
    private String conteudo;
    private List<PlanoServicoExecucaoReceptor> receptores;
}
