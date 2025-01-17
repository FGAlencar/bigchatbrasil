package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/plano-servico")
@RequiredArgsConstructor
public class PlanoServicoController extends CrudController<PlanoServico, Long> {
    private final PlanoServicoService service;
    @GetMapping("/plataformas")
    public ResponseEntity<List<PlanoServicoPlataformas>> getPlataformas(){
        return ResponseEntity.ok(this.service.findAllPlataformas());
    }
}
