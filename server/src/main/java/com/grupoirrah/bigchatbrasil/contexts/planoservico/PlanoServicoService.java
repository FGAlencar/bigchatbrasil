package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PlanoServicoService extends CrudService<PlanoServico, Long> {

    public List<PlanoServicoPlataformas> findAllPlataformas(){
        return Arrays.stream(PlanoServicoPlataformas.values()).toList();
    }
}
