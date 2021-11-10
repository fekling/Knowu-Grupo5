package com.example.knowuproject.controle;

import com.example.knowuproject.dto.Usuariodto;
import com.example.knowuproject.modelo.Localidade;
import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.repositorio.LocalidadeRepository;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.*;
import javax.validation.Valid;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    List<Usuariodto> usuariodtos;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    LocalidadeRepository localidadeRepository;

    public UsuarioController() {
        this.usuariodtos = new ArrayList<>();
    }


    @PostMapping("/adicionar")
    public ResponseEntity adicionarUsuario(@RequestBody @Valid Usuario usuario) {
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
            return ResponseEntity.status(200).body(usuario.getIdUsuario());
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

    @PutMapping("/enviarCodigo")
    public ResponseEntity enviarCodigoRecuperacaoSenha(@RequestBody Usuario usuario) {


        Optional<Usuario> usuarios = Optional.ofNullable(usuarioRepository.findByEmail(usuario.getEmail()));
        System.out.println(usuarios.get());
        if (!usuarios.isEmpty()) {

            Properties props = new Properties();
            /** Parâmetros de conexão com servidor Hotmail */
            props.put("mail.transport.protocol", "smtp");
            props.put("mail.smtp.host", "smtp.live.com");
            props.put("mail.smtp.socketFactory.port", "587");
            props.put("mail.smtp.socketFactory.fallback", "false");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.port", "587");

            Session session = Session.getDefaultInstance(props,
                    new javax.mail.Authenticator() {
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication("knowu@outlook.com.br", "#Gfgrupo5");
                        }
                    });

            /** Ativa Debug para sessão */
            session.setDebug(true);


            try {

                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress("knowu@outlook.com.br")); //Remetente

                Usuario usuario1 = new Usuario();
                usuario1 = usuarios.get();
                usuario1.setCodigoRecuperaSenha(ThreadLocalRandom.current().nextInt(10000, 99999));
                System.out.println(usuario1.getCodigoRecuperaSenha());
                usuarioRepository.save(usuario1);

                message.setRecipients(Message.RecipientType.TO,
                        InternetAddress.parse(usuario.getEmail())); //Destinatário(s)
                message.setSubject("Código de recuperação de senha"); //Assunto
                message.setText(String.format("Prezado(a) %s, espero que esteja tendo um ótimo dia! ☺\n\n" +
                                "Para recuperar sua senha, digite o código abaixo no site\n" +
                                "%d\n\n" +
                                "KnowU, revolucionando o jeito de fazer novas amizades",
                        usuario1.getNome(), usuario1.getCodigoRecuperaSenha()));

                /**Método para enviar a mensagem criada*/
                Transport.send(message);

                return ResponseEntity.status(200).build();

            } catch (MessagingException e) {
                throw new RuntimeException(e);
            }
        }


        return ResponseEntity.status(204).build();

    }

    @PostMapping("/validarCodigo")
    public ResponseEntity validarCodigoRecuperacao(@RequestBody Usuario usuario) {

        Optional<Usuario> usuario1 = Optional.ofNullable((usuarioRepository.findByCodigoRecuperaSenha(usuario.getCodigoRecuperaSenha())));

        if (!usuario1.isEmpty()) {
            return ResponseEntity.status(200).body(usuario1.get().getIdUsuario());

        }

        return ResponseEntity.status(204).build();
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

    @PostMapping("/usuarios-proximos")
    public ResponseEntity eventosProximos(@RequestBody Localidade localidade) {

        System.out.println("teste");

        List usuarios = localidadeRepository.findByAllUsuariosProximos(localidade.getLatitute(), localidade.getLongitute());

        if (usuarios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(usuarios);
    }
}
