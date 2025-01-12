package com.grupoirrah.bigchatbrasil.contexts.usuario;

import com.grupoirrah.bigchatbrasil.base.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
}
