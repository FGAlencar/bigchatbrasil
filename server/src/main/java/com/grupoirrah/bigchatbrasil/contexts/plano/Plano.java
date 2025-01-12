package com.grupoirrah.bigchatbrasil.contexts.plano;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServico;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Plano implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "tipo_plano")
    @Enumerated(EnumType.STRING)
    private TipoPlano tipoPlano;

    @Column(name = "data_inicial")
    private LocalDate dataInicial;

    @Column(name = "data_final")
    private LocalDate dataFinal;

    @Column(name = "ativo")
    private Boolean ativo = Boolean.TRUE;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "plano_planoservico", joinColumns = {
            @JoinColumn(name = "id_plano", referencedColumnName = "id") }, inverseJoinColumns = {
            @JoinColumn(name = "id_planoservico", referencedColumnName = "id") })
    private List<PlanoServico> servicos;
}
