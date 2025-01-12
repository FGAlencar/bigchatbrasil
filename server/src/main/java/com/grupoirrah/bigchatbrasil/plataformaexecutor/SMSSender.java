package com.grupoirrah.bigchatbrasil.plataformaexecutor;


import com.grupoirrah.bigchatbrasil.contexts.planoservicoexecucao.StatusReceptor;

public class SMSSender implements PlataformaExecutor{
    @Override
    public Receptor prepareReceptor(Receptor receptor) {
        return receptor;
    }

    @Override
    public ConnectionExecutor createConnection() {
        return new SMSSenderConnection();
    }

   static class SMSSenderConnection implements ConnectionExecutor{

        @Override
        public ConnectionExecutionResponse execute(String conteudo, String numero){
            //Regra de conexão com o sistema de envio SMS
           return ConnectionExecutionResponseImpl.builder()
                   .status(StatusReceptor.ENTREGUE)
                   .message(null)
                   .build();
       };

   }


}
