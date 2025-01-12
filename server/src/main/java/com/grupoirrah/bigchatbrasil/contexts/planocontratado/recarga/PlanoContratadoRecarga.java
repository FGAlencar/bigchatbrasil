package com.grupoirrah.bigchatbrasil.contexts.planocontratado.recarga;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.Pessoa;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano.PlanoContratado;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "planocontratadorecarga")
public class PlanoContratadoRecarga implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "planocontratado", referencedColumnName = "id")
    @JsonIgnore
    private PlanoContratado planoContratado;

    @Column(name = "valor")
    private BigDecimal valor;

    @Column(name = "responsavel")
    @JoinColumn(name = "responsavel", referencedColumnName = "id")
    private Pessoa responsavel;
}
