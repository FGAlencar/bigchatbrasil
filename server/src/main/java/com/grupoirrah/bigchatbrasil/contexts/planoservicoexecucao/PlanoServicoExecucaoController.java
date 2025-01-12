package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plano-servico-execucao")
public class PlanoServicoExecucaoController extends CrudController<PlanoServicoExecucao, Long> {
}
