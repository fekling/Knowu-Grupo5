package com.example.knowuproject.controle;

import com.example.knowuproject.dto.Usuariodto;
import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.repositorio.LocalidadeRepository;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    LocalidadeRepository localidadeRepository;

    public AutenticacaoController() {
        this.usuariodtos = new ArrayList<>();
    }


    @PostMapping("/adicionar")
    public ResponseEntity adicionarUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
        return ResponseEntity.status(201).build();
    }

    @PostMapping("/login")
    public ResponseEntity autenticarUsuario(@RequestBody Usuario usuario) {

        Optional<Usuario> usuarioLogin = Optional.ofNullable(usuarioRepository.findByUsuario(usuario.getUsuario()));

        if (usuario.getUsuario().equals(usuarioLogin.get().getUsuario()) && usuario.senha().equals(usuarioLogin.get().senha())) {
            usuario.login();
            usuario.setIdUsuario(usuarioLogin.get().getIdUsuario());
            localidadeRepository.save(usuario.getLocalidade());
            usuarioRepository.save(usuario);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(204).build();
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
    public ResponseEntity exibirUsuarios() {

        return ResponseEntity.status(200).body(usuarioRepository.findAll());
    }

    @PutMapping("/logoff/{id}")
    public ResponseEntity deslogarUsuario(@PathVariable Integer id) {

        Optional<Usuario> usuarios = usuarioRepository.findById(id);
        if (!usuarios.isEmpty()) {
            Usuario usuario = new Usuario();
            usuario = usuarios.get();
            usuario.logoff();
            usuarioRepository.save(usuario);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(204).build();
    }

    @PutMapping("/enviarCodigo/{id}")
    public ResponseEntity enviarCodigoRecuperacaoSenha(@PathVariable Integer id) {

        Optional<Usuario> usuarios = usuarioRepository.findById(id);

        if (!usuarios.isEmpty()) {
            Usuario usuario = new Usuario();
            usuario = usuarios.get();
            usuario.setCodigoRecuperaSenha(ThreadLocalRandom.current().nextInt(10000, 99999));
            System.out.println(usuario.getCodigoRecuperaSenha());
            usuarioRepository.save(usuario);
            return ResponseEntity.status(200).build();
        }

        return null;
    }

    @PatchMapping("/atualizarDadosConta/{id}")
    public ResponseEntity atualizarDadosConta(@PathVariable Integer id,
                                              @RequestBody Usuario usuario) {

        Usuario dadosUsuario = usuario;
        Optional<Usuario> dados = usuarioRepository.findById(id);
        Usuario dadosOriginais = dados.get();

//        Dados da conta
        if (usuario.getDataNascimento() != null) {
            dadosOriginais.setDataNascimento(dadosUsuario.getDataNascimento());
        }

        if (usuario.getGenero() != null) {
            dadosOriginais.setGenero(dadosUsuario.getGenero());
        }

        if (usuario.getEmail() != null) {
            dadosOriginais.setEmail(dadosUsuario.getEmail());
        }

        if (usuario.senha() != null) {
            dadosOriginais.setSenha(dadosUsuario.senha());
        }
//        Fim dados da conta

//        Dados do perfil
        if (usuario.getNome() != null) {
            dadosOriginais.setNome(dadosUsuario.getNome());
        }

        if (usuario.getUsuario() != null) {
            dadosOriginais.setUsuario(dadosUsuario.getUsuario());
        }

        if (usuario.getDescricao() != null) {
            dadosOriginais.setDescricao(dadosUsuario.getDescricao());
        }
//        Fim dados do perfil

        dadosOriginais.setIdUsuario(id);
        usuarioRepository.save(dadosOriginais);

        return ResponseEntity.status(200).build();
    }


}
