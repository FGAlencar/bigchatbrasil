package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.PlanoContratado;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServico;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
@Builder
public class PlanoServicoExecucao implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_planocontratado", referencedColumnName = "id")
    private PlanoContratado planoContratado;

    @ManyToOne
    @JoinColumn(name = "id_planoservico", referencedColumnName = "id")
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
