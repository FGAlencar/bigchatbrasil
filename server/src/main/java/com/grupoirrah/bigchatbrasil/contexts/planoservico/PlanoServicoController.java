package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plano-servico")
public class PlanoServicoController extends CrudController<PlanoServico, Long> {
}
