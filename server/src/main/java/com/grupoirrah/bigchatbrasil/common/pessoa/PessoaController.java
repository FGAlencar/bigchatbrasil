package com.grupoirrah.bigchatbrasil.common.pessoa;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pessoa")
public class PessoaController extends CrudController<Pessoa, Long> {
}
