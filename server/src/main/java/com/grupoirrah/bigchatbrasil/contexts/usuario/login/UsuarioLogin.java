package com.grupoirrah.bigchatbrasil.contexts.usuario.login;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.usuario.Usuario;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class UsuarioLogin implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "usuario", referencedColumnName = "id")
    private Usuario usuario;

    @Column(name = "email_redefinicao")
    private  String emailRedefinicao;

    @Column(name = "login")
    private String login;

    @Column(name = "senha")
    private String senha;

}
