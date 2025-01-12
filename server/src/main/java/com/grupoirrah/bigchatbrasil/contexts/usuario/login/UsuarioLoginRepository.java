package com.grupoirrah.bigchatbrasil.contexts.usuario.login;

import com.grupoirrah.bigchatbrasil.base.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioLoginRepository extends CrudRepository<UsuarioLogin, Long> {

    Optional<UsuarioLogin> findByLoginAndSenha(String login, String senha);
}
