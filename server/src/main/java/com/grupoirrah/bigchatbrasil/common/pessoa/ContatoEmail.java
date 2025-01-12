package com.grupoirrah.bigchatbrasil.common.pessoa;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class ContatoEmail implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pessoa", referencedColumnName = "id")
    @JsonIncludeProperties({"id", "nome", "razaoSocial", "tipoPessoa", "cpfCnpj"})
    private Pessoa pessoa;

    @Column(name = "email")
    private String email;

    @Column(name = "principal")
    private Boolean principal;

}
