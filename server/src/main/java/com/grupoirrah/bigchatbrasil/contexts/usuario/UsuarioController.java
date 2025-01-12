package com.grupoirrah.bigchatbrasil.contexts.usuario;

import com.grupoirrah.bigchatbrasil.base.CrudController;
import com.grupoirrah.bigchatbrasil.contexts.usuario.login.LoginRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController extends CrudController<Usuario, Long> {
    private final UsuarioService service;

    @PutMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginRequest request){
        Usuario usuario = this.service.login(request);
        return ResponseEntity.ok(usuario);
    }
}
