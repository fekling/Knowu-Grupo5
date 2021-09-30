package com.example.knowuproject.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class AutenticacaoController {

    List<Usuario> usuarios;

    public AutenticacaoController() {
        this.usuarios = new ArrayList<>();
    }


    @PostMapping("/adicionar")
    public String adicionarUsuario(@RequestBody Usuario usuario) {
        usuarios.add(usuario);
        return String.format("Usuario %s adicionado com sucesso!!", usuario.getNome());
    }

    @PostMapping("/login")
    public List<Usuario> autenticarUsuario(@RequestBody Usuario usuario) {

        for (Usuario usuario1 : usuarios) {
            if (usuario.getUsuario().equals(usuario1.getUsuario()) && usuario.senha().equals(usuario1.senha())) {
                usuario1.login();

            }
        }
        return usuarios.stream().filter(usuario2 -> usuario2.getUsuario().equals(usuario.getUsuario()) && usuario2.senha().equals(usuario.senha())).collect(Collectors.toList());
    }

    @DeleteMapping("/excluir")
    public String removerUsuario(@RequestBody Usuario usuario) {

        String frase = "";

        for (int i = 0; i < usuarios.size(); i++) {

            if (usuarios.get(i).getUsuario().equals(usuario.getUsuario())) {
                frase = String.format("Removendo o usuário %s", usuario.getUsuario());
                usuarios.remove(usuarios.get(i));
            }
        }
        return frase;
    }

    @GetMapping("/todos")
    public List<Usuario> exibirUsuarios() {

        return usuarios.stream().sorted(Comparator.comparing(Usuario::getNome)).collect(Collectors.toList());
    }

    @PostMapping("/logoff")
    public String deslogarUsuario(@RequestBody Usuario usuario) {

        String frase = String.format("Usuário %s não autenticado", usuario.getNome());
        for (Usuario usuario1 : usuarios) {
            if (usuario.getUsuario().equals(usuario1.getUsuario()) && usuario1.getAutenticado()) {
                usuario1.logoff();
                frase = String.format("Usuário %s saiu do sistema", usuario1.getNome());
            }
        }
        return frase;
    }

}
