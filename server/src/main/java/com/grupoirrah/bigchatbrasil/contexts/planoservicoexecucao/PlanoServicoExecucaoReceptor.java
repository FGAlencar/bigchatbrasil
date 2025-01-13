package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServicoPlataformas;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.Receptor;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "planoservicoexecucaoreceptor")
public class PlanoServicoExecucaoReceptor implements PersistentEntity<Long>, Receptor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "planoservicoexecucao", referencedColumnName = "id")
    @JsonIgnore
    private PlanoServicoExecucao execucao;

    @Column(name = "identificacao")
    private String identificacao;

    @Column(name = "ddd")
    private String ddd;

    @Column(name = "numero")
    private String numero;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StatusReceptor status;

    @Column(name = "mensagem_erro")
    private String mensagemErro;

    @ElementCollection
    @CollectionTable(name = "receptor_plataformas", joinColumns = @JoinColumn(name = "receptor", referencedColumnName = "id"))
    @Column(name = "plataforma")
    @Enumerated(EnumType.STRING)
    private List<PlanoServicoPlataformas> plataformas;
}
