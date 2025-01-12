package com.grupoirrah.bigchatbrasil.contexts.pessoa;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "endereco")
public class Endereco implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pessoa", referencedColumnName = "id")
    @JsonIncludeProperties({"id", "nome", "razaoSocial", "tipoPessoa", "cpfCnpj"})
    private Pessoa pessoa;

    @Column(name = "rua")
    private String rua;

    @Column(name = "numero")
    private String numero;

    @Column(name = "complemento")
    private String complemente;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "cidade")
    private String cidade;

    @Column(name = "estado")
    private String estado;

    @Column(name = "uf")
    private String uf;

    @Column(name = "principal")
    private Boolean principal;

    @Column(name = "correspondencia")
    private Boolean correspondencia;
}
