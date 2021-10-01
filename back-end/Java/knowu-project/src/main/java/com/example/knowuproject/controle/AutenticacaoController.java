package com.example.knowuproject.controle;

import com.example.knowuproject.dto.Usuariodto;
import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/usuarios")
public class AutenticacaoController {

    List<Usuariodto> usuariodtos;

    @Autowired
    UsuarioRepository usuarioRepository;

    public AutenticacaoController() {
        this.usuariodtos = new ArrayList<>();
    }


    @PostMapping("/adicionar")
    public String adicionarUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
        return String.format("Usuario %s adicionado com sucesso!!", usuario.getNome());
    }

    @PostMapping("/login")
    public List<Usuario> autenticarUsuario(@RequestBody Usuario usuario) {

        List<Usuario> usuarios = usuarioRepository.findByUsuario(usuario.getUsuario());

        if (usuarios.stream().filter(usuario1 -> usuario1.getUsuario().equals(usuario.getUsuario()) && usuario1.senha().equals(usuario.senha())).count() > 0) {
            usuario.login();
            for (Usuario usuario1 : usuarios) {
                usuario.setIdUsuario(usuario1.getIdUsuario());
                break;
            }
            usuarioRepository.save(usuario);
        }

        return usuarioRepository.findByUsuario(usuario.getUsuario());
    }

//    @DeleteMapping("/excluir")
//    public String removerUsuario(@RequestBody Usuariodto usuariodto) {
//
//        String frase = "";
//
//        for (int i = 0; i < usuariodtos.size(); i++) {
//
//            if (usuariodtos.get(i).getUsuario().equals(usuariodto.getUsuario())) {
//                frase = String.format("Removendo o usuário %s", usuariodto.getUsuario());
//                usuariodtos.remove(usuariodtos.get(i));
//            }
//        }
//        return frase;
//    }

    @GetMapping("/todos")
    public List<Usuario> exibirUsuarios() {

        return usuarioRepository.findAll();
    }

    @PutMapping("/logoff/{id}")
    public String deslogarUsuario(@PathVariable Integer id) {

        Optional<Usuario> usuarios = usuarioRepository.findById(id);
        if (!usuarios.isEmpty()) {
            Usuario usuario = new Usuario();
            usuario = usuarios.get();
            usuario.logoff();
            usuarioRepository.save(usuario);
            return String.format("Usuário %s fez o logoff da aplicação", usuario.getUsuario());
        }

        return null;
    }

    @PutMapping("/enviarCodigo/{id}")
    public Integer enviarCodigoRecuperacaoSenha(@PathVariable Integer id) {

        Optional<Usuario> usuarios = usuarioRepository.findById(id);

        if (!usuarios.isEmpty()) {
            Usuario usuario = new Usuario();
            usuario = usuarios.get();
            usuario.setCodigoRecuperaSenha(ThreadLocalRandom.current().nextInt(10000, 99999));
            System.out.println(usuario.getCodigoRecuperaSenha());
            usuarioRepository.save(usuario);
            return usuario.getCodigoRecuperaSenha();
        }

        return null;
    }

    @PutMapping("/atualizarDadosConta/{id}")
    public String atualizarDadosConta(@PathVariable Integer id,
                                      @RequestBody Usuario usuario) {

        Usuario dadosUsuario = usuario;
        Optional<Usuario> dados = usuarioRepository.findById(id);
        Usuario dadosOriginais = dados.get();

//        Dados da conta
        if (!usuario.getDataNascimento().isEmpty()) {
            dadosOriginais.setDataNascimento(dadosUsuario.getDataNascimento());
        }

        if (!usuario.getGenero().isEmpty()) {
            dadosOriginais.setGenero(dadosUsuario.getGenero());
        }

        if (!usuario.getEmail().isEmpty()) {
            dadosOriginais.setEmail(dadosUsuario.getEmail());
        }

        if (!usuario.senha().isEmpty()) {
            dadosOriginais.setSenha(dadosUsuario.senha());
        }
//        Fim dados da conta

//        Dados do perfil
        if (!usuario.getNome().isEmpty()) {
            dadosOriginais.setNome(dadosUsuario.getNome());
        }

        if (!usuario.getUsuario().isEmpty()) {
            dadosOriginais.setUsuario(dadosUsuario.getUsuario());
        }

        if (!usuario.getDescricao().isEmpty()) {
            dadosOriginais.setDescricao(dadosUsuario.getDescricao());
        }
//        Fim dados do perfil

        dadosOriginais.setIdUsuario(id);
        usuarioRepository.save(dadosOriginais);

        return String.format("Os dados do usuário %s foram alterados com sucesso!!", dados.get().getNome());
    }


}
