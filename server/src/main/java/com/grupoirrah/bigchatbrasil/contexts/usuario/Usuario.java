package com.grupoirrah.bigchatbrasil.contexts.usuario;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.Pessoa;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano.PlanoContratado;
import com.grupoirrah.bigchatbrasil.contexts.usuario.login.UsuarioLogin;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "usuario")
public class Usuario implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @JoinTable( name = "usuario_planocontratado",
            joinColumns = @JoinColumn(name = "usuario", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "planocontratado", referencedColumnName = "id"))
    private List<PlanoContratado> planos;

    @OneToOne
    @JoinColumn(name = "pessoa", referencedColumnName = "id")
    @JsonIncludeProperties("id")
    private Pessoa pessoa;

    @OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private UsuarioLogin dadosLogin;
}
