package com.grupoirrah.bigchatbrasil.contexts.usuario.login;

import lombok.Data;

@Data
public class LoginRequest {
    private String login;
    private String senha;
}
