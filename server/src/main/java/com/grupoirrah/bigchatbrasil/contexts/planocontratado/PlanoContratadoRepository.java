package com.grupoirrah.bigchatbrasil.contexts.planocontratado;

import com.grupoirrah.bigchatbrasil.base.CrudRepository;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano.PlanoContratado;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoContratadoRepository extends CrudRepository<PlanoContratado, Long> {
}
