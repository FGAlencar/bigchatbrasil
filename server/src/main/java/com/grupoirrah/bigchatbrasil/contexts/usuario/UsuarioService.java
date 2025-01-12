package com.grupoirrah.bigchatbrasil.contexts.usuario;

import com.grupoirrah.bigchatbrasil.base.CrudService;
import com.grupoirrah.bigchatbrasil.base.restexceptions.BadRequestException;
import com.grupoirrah.bigchatbrasil.base.restexceptions.NotFoundException;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.Pessoa;
import com.grupoirrah.bigchatbrasil.contexts.pessoa.PessoaService;
import com.grupoirrah.bigchatbrasil.base.restexceptions.HelpRestException;
import com.grupoirrah.bigchatbrasil.contexts.usuario.login.LoginRequest;
import com.grupoirrah.bigchatbrasil.contexts.usuario.login.UsuarioLogin;
import com.grupoirrah.bigchatbrasil.contexts.usuario.login.UsuarioLoginRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService extends CrudService<Usuario, Long> {
    private final PessoaService pessoaService;
    private final UsuarioLoginRepository loginRepository;

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

    public Usuario login(LoginRequest request){
        if(StringUtils.isBlank(request.getLogin()) || StringUtils.isBlank(request.getSenha())){
            HelpRestException.throwBadRequest("Login ou senha inválido. Verifique.");
        }

        UsuarioLogin login = this.loginRepository.findByLoginAndSenha(request.getLogin(), request.getSenha())
                .orElseThrow(() -> new NotFoundException("Login ou senha inválido. Verifique."));

        return login.getUsuario();

    }

}

