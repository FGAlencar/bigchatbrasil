package com.grupoirrah.bigchatbrasil.common.pessoa;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PessoaService extends CrudService<Pessoa, Long> {

    @Override
    public Pessoa beforeSave(Pessoa pessoa){
        pessoa.getContatoTelefones().forEach(item -> item.setPessoa(pessoa));
        pessoa.getEnderecos().forEach(item -> item.setPessoa(pessoa));
        pessoa.getEmails().forEach(item -> item.setPessoa(pessoa));

        return pessoa;
    }
}
