package com.grupoirrah.bigchatbrasil.contexts.planocontratado;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.PlanoServicoExecucaoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plano-contratado")
public class PlanoContratadoController extends CrudController<PlanoContratado, Long> {
    @Autowired
    private PlanoContratadoService service;

    @PostMapping("/{id}/servico/{idServico}")
    public ResponseEntity<Void> execute(@PathVariable("id") Long idPlanoContatado,
                                        @PathVariable("idServico") Long idServico,
                                        @RequestBody PlanoServicoExecucaoRequest request){
        request.setIdPlanoContratado(idPlanoContatado);
        request.setIdServico(idServico);
        this.service.executarServico(request);
        return ResponseEntity.accepted().build();
    }
}
