package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
public class PlanoServico implements PersistentEntity<Long> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "valor")
    private BigDecimal valor = BigDecimal.ZERO;

    @Column(name = "executor")
    @Enumerated(EnumType.STRING)
    private PlanoServicoExecutor executor;
}
