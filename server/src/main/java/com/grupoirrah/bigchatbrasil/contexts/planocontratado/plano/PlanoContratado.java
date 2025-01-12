package com.grupoirrah.bigchatbrasil.contexts.planocontratado.plano;

import com.grupoirrah.bigchatbrasil.base.PersistentEntity;
import com.grupoirrah.bigchatbrasil.contexts.plano.Plano;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.recarga.PlanoContratadoRecarga;
import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.PlanoServicoExecucao;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Entity
public class PlanoContratado implements PersistentEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "plano_id", referencedColumnName = "id")
    private Plano plano;

    @Column(name = "valor_utilizado")
    private BigDecimal valorUtilizado;

    @Column(name = "valor_disponivel")
    private BigDecimal valorDisponivel;

    @OneToMany(mappedBy = "planoContratado", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PlanoServicoExecucao> execucoes;

    @OneToMany(mappedBy = "planoContratado", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PlanoContratadoRecarga> recargas;

    public void addCustoNovaExecucao(BigDecimal valorUtilizado){
        this.valorUtilizado = this.valorUtilizado.add(valorUtilizado);
        this.valorDisponivel = this.valorDisponivel.subtract(valorUtilizado);
    }

    public void novaRecarga(PlanoContratadoRecarga recarga){
        this.valorDisponivel = this.valorDisponivel.add(recarga.getValor());
        recarga.setPlanoContratado(this);
        this.recargas.add(recarga);
    }
}
