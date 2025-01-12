package com.grupoirrah.bigchatbrasil.contexts.usuario;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.Pessoa;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.PessoaService;
import com.grupoirrah.bigchatbrasil.base.restexceptions.HelpRestException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService extends CrudService<Usuario, Long> {
    private final PessoaService pessoaService;

    @Override
    public Usuario beforeSave(Usuario usuario){
        usuario = this.handlePessoa(usuario);
        return usuario;
    }

    private Usuario handlePessoa(Usuario usuario){
        if(usuario.getPessoa() == null){
            HelpRestException.throwBadRequest("É necessário cadastro de pessoa");
        }

        if(!usuario.getPessoa().isNew()){
            return usuario;
        }

        Pessoa pessoa = this.pessoaService.save(usuario.getPessoa());
        usuario.setPessoa(pessoa);
        return usuario;
    }

}

