package com.grupoirrah.bigchatbrasil.contexts.pessoa;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "contatotelefone")
public class ContatoTelefone implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pessoa", referencedColumnName = "id")
    @JsonIncludeProperties({"id", "nome", "razaoSocial", "tipoPessoa", "cpfCnpj"})
    private Pessoa pessoa;

    @Column(name = "ddd")
    private String ddd;

    @Column(name = "numero")
    private String numero;

    @Column(name = "whatsapp")
    private Boolean whatsApp;

    @Column(name = "principal")
    private Boolean principal;
}
