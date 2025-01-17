package com.grupoirrah.bigchatbrasil.contexts.pessoa;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "pessoa")
public class Pessoa implements PersistentEntity<Long>, Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "razao_social")
    private String razaoSocial;

    @Column(name = "tipo_pessoa")
    @Enumerated(EnumType.STRING)
    private TipoPessoa tipoPessoa;

    @Column(name = "cpf_cnpj")
    private String cpfCnpj;

    @Column(name = "ativo")
    private Boolean ativo = Boolean.TRUE;

    @OneToOne
    @JoinColumn(name = "responsavel", referencedColumnName = "id")
    @JsonIgnoreProperties({"contatoTelefones", "enderecos", "emails", "responsavel"})
    private Pessoa responsavel;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ContatoTelefone> contatoTelefones = new ArrayList<>();

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Endereco> enderecos = new ArrayList<>();;

    @OneToMany(mappedBy = "pessoa", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ContatoEmail> emails = new ArrayList<>();;


}
