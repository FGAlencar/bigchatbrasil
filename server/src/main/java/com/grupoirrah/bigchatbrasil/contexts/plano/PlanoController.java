package com.grupoirrah.bigchatbrasil.contexts.plano;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plano")
public class PlanoController extends CrudController<Plano, Long> {
}
