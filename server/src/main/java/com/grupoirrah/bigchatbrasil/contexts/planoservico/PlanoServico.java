package com.grupoirrah.bigchatbrasil.contexts.planoservico;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
public class PlanoServico implements PersistentEntity<Long> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "valor")
    private BigDecimal valor;

    @ElementCollection
    @CollectionTable(name = "planoservico_plataformas", joinColumns = @JoinColumn(name = "planoservico", referencedColumnName = "id"))
    @Column(name = "plataforma")
    @Enumerated(EnumType.STRING)
    private List<PlanoServicoPlataformas> plataformas;
}
