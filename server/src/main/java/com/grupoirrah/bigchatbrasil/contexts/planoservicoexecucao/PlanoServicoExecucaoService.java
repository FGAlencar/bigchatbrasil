package com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import com.grupoirrah.bigchatbrasil.base.restexceptions.EntityNotFoundException;
import com.grupoirrah.bigchatbrasil.contexts.planocontratado.PlanoContratado;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServico;
import com.grupoirrah.bigchatbrasil.contexts.planoservico.PlanoServicoPlataformas;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.ConnectionExecutionResponse;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.ConnectionExecutor;
import com.grupoirrah.bigchatbrasil.plataformaexecutor.PlataformaExecutor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class PlanoServicoExecucaoService extends CrudService<PlanoServicoExecucao, Long> {

    @Override
    public PlanoServicoExecucao beforeSave(PlanoServicoExecucao execucao){
        super.beforeSave(execucao);
        execucao.getReceptores()
                .forEach(receptor -> receptor.setExecucao(execucao));
        return execucao;
    }

    public void executeRequest(PlanoServicoExecucaoRequest request){
        PlanoServicoExecucao execucao = this.buildEntity(request);

        if(!this.existeSaldoParaExecucao(execucao)){
            throw new RuntimeException("Não tem saldo suficiente");
        }

        this.doExecute(execucao);
    }

    private boolean existeSaldoParaExecucao( PlanoServicoExecucao execucao){
        BigDecimal valorDisponivel = execucao.getPlanoContratado().getValorDisponivel();
        BigDecimal valorUnitario = execucao.getServico().getValor();
        long quantidadeSolicitada = execucao.getReceptores()
                .stream()
                .mapToLong(receptor -> receptor.getPlataformas().size())
                .sum();

        BigDecimal valorRequerido = valorUnitario.multiply(BigDecimal.valueOf(quantidadeSolicitada));
        return valorDisponivel.compareTo(valorRequerido) >= 0;

    }


    @Async
    public void doExecute(PlanoServicoExecucao execucao){
        for ( PlanoServicoExecucaoReceptor receptor : execucao.getReceptores()){
            for(PlanoServicoPlataformas plataforma: receptor.getPlataformas()){
                PlataformaExecutor executor = plataforma.getExecutor();
                receptor = (PlanoServicoExecucaoReceptor) executor.prepareReceptor(receptor);
                ConnectionExecutor connection = executor.createConnection();
                ConnectionExecutionResponse response = connection.execute(execucao.getConteudo(), receptor.getNumero());
                receptor = (PlanoServicoExecucaoReceptor) executor.updateReceptor(receptor, response);
                if(StatusReceptor.ENTREGUE.equals(receptor.getStatus())){
                    execucao.oneMoreExecutedService();
                }
            }
        }

        execucao.getPlanoContratado().addCustoNovaExecucao(execucao.getValorTotal());
        execucao.getPlanoContratado().getExecucoes().add(execucao);
        this.save(execucao);

    }

    public PlanoServicoExecucao buildEntity(PlanoServicoExecucaoRequest request){
        PlanoServicoExecucao execucao = PlanoServicoExecucao.builder()
                .planoContratado(this.entityManager.getReference(PlanoContratado.class, request.getIdPlanoContratado()))
                .servico(this.entityManager.getReference(PlanoServico.class, request.getIdServico()))
                .conteudo(request.getConteudo())
                .receptores(request.getReceptores())
                .build();

        BigDecimal custoUnitario = execucao.getPlanoContratado()
                .getPlano()
                .getServicos()
                .stream()
                .filter( planoServico -> planoServico.getId().equals(request.getIdServico()))
                .findFirst()
                .orElseThrow(() -> new EntityNotFoundException("Não foi encontrado serviço desejado"))
                .getValor();

        execucao.setValorUnitario(custoUnitario);
        execucao.setValorTotal(BigDecimal.ZERO);
        return execucao;
    };
}
