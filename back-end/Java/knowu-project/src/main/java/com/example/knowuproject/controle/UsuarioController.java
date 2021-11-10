package com.example.knowuproject.controle;

import com.example.knowuproject.KnowuProjectApplication;
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
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;
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
        listaUsuarioDocLayout(usuario);
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

    public static void listaUsuarioDocLayout(Usuario usuario){
        usuario.setDescricao(null);
        usuario.setSenha(null);
        usuario.setAutenticado(null);
        usuario.setCodigoRecuperaSenha(null);
        usuario.setAutenticado(null);
        usuario.setAutenticadoEm(null);
        usuario.setLocalidade(null);
        List<Usuario> listaUsuarios = new ArrayList<>();
        listaUsuarios.add(usuario);
        gravaArquivoTxt(listaUsuarios, "usuarios.txt");
        leArquivoUsuarioTxt("usuarios.txt");
    }

    public static void gravaArquivoTxt(List<Usuario> lista, String nomeArq) {
        int contaRegDados = 0; //São os registros de corpo do documento de layout

        //Monta o registro de Header
        String header = "LISTA_USUARIOS_"; //Aqui é onde cria o documento de layout
        Date dataDeHoje = new Date(); 		//Formato no padrão Java, não é o desejado, então criar objeto para formatar...
        SimpleDateFormat formataData = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"); //Data e horário formatado
        header += formataData.format(dataDeHoje);
        header += "US00"; //‘String’ para mostrar a versão do documento

        //Grava o registro de header
        gravaRegistroAluno(header, nomeArq);

        //Monta e grava o corpo do arquivo
        for (Usuario user : lista) {
            String corpo = "US01"; //Recebe o registro de dados (seguindo o documento de layout)
            corpo += String.format("%4d", user.getIdUsuario());
            corpo += String.format("%-50s", user.getNome());
            corpo += String.format("%-10s", user.getUsuario()); //VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
            corpo += String.format("%-14s", user.getCelular());
            corpo += String.format("%-40s", user.getEmail());
            //corpo += String.format("%-40.40s", user.getDescricao());
            corpo += String.format("%-14s", user.getCpf());
            corpo += String.format("%-10s", user.getDataNascimento());
            corpo += String.format("%-15s", user.getGenero());
            //corpo += String.format("%05d", user.getCodigoRecuperaSenha());
            //corpo += String.format("%b", user.getAutenticado());
            //corpo += String.format("%-40.40s", user.getAutenticadoEm());

            contaRegDados++;
            gravaRegistroAluno(corpo, nomeArq);
        }

        //Monta e grava o registro Usuário trailer
        String trailer = "US02"; 							//Lá do documento de layout
        trailer += String.format(": %d dados registrados", contaRegDados);
        gravaRegistroAluno(trailer, nomeArq);
    }

    public static void gravaRegistroAluno(String registro, String nomeArq) {
        BufferedWriter saida = null;
        //Abre Arquivo
        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
        }
        //Grava o registro e fecha o arquivo, mas ainda não gravou o arquivo!
        try {
            saida.append(registro + "\n");
            saida.close();
        } catch (IOException erro) {
            System.out.println("Erro ao gravar no arquivo: " + erro.getMessage());
        }
    }

    public static void leArquivoUsuarioTxt(String nomeArq) {
        BufferedReader entrada = null;
        String registro;
        String tipoRegistro;

        //Atributos para
        int idUsuario;
        String nome;
        String usuario;  //VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
        String celular;
        String email;
        String cpf;
        String dataNascimento;
        String genero;
        //String localizacao;
        int qtdRegistrosGravados;
        int contaRegDados = 0;

        List<Usuario> listaLidaDeUsuarios = new ArrayList<>();

        //Abre o arquivo
        try {
            entrada = new BufferedReader(new BufferedReader(new FileReader(nomeArq)));
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
        }

        //Lê o arquivo
        try {
            //lê o primeiro registro do arquivo
            assert entrada != null;
            registro = entrada.readLine();
            while (registro != null) { 					//Enquanto diferir de NULL é porque não chegou ao fim do arquivo
                tipoRegistro = registro.substring(0,4); //lê o 0, 1, 2 e 3, mas vai até o 4, então no próximo começa do 4 até o seu final
                if (tipoRegistro.equals("US00")) {
                    System.out.println("Header");
                    System.out.println("Tipo de arquivo: " + registro.substring(4,11));
                    System.out.println("Data/hora de gravação do arquivo: " + registro.substring(11,30));
                    System.out.println("Versão do layout: " + registro.substring(30,33));

                } else if (tipoRegistro.equals("US02")) {
                    System.out.println("Trailer");
                    qtdRegistrosGravados = Integer.parseInt(registro.substring(4,9));
                    if (qtdRegistrosGravados == listaLidaDeUsuarios.size()){
                        System.out.println("Quantidade de registros gravados compatível com a quantidade lida");
                    } else {
                        System.out.println("Quantidade de registros gravados não confere com a quantidade lida");
                    }

                } else if (tipoRegistro.equals("US01")) {
                    System.out.println("Corpo");
                    idUsuario = Integer.parseInt(registro.substring(4,9));
                    nome = registro.substring(9,59);
                    usuario = registro.substring(59,70); 					//VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
                    celular = registro.substring(70,84); //trim();
                    email = registro.substring(84,124); //trim();
                    cpf = registro.substring(124,138);
                    dataNascimento = registro.substring(138,148);
                    genero = registro.substring(148,163);
                    //localizacao = registro.substring(105,110);
                    Usuario user = new Usuario(idUsuario, nome, usuario, celular, email, cpf, dataNascimento, genero);
                    listaLidaDeUsuarios.add(user);
                    //contaRegDados++;
                } else {
                    System.out.println("Tipo de registro inválido!");
                }
                //Lê o próximo registro
                registro = entrada.readLine();
            }

            entrada.close();

        } catch(IOException erro){
            System.out.println("Erro ao ler o arquivo: " + erro.getMessage());
        }

        System.out.println("\nConteúdo lido do arquivo");
        for (Usuario user : listaLidaDeUsuarios){
            System.out.println(user);
        }
    }
}

