package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano.PlanoContratado;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServico;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "planoservicoexecucao")
public class PlanoServicoExecucao implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "planocontratado", referencedColumnName = "id")
    @JsonIgnore
    private PlanoContratado planoContratado;

    @ManyToOne
    @JoinColumn(name = "planoservico", referencedColumnName = "id")
    private PlanoServico servico;

    @Column(name = "conteudo")
    private String conteudo;

    @Column(name = "valor_unitario")
    private BigDecimal valorUnitario;

    @Column(name = "valor_total")
    private BigDecimal valorTotal ;

    @OneToMany(mappedBy = "execucao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PlanoServicoExecucaoReceptor> receptores;

    public void oneMoreExecutedService(){
        this.valorTotal = this.valorTotal.add(this.valorUnitario);
    }

}
