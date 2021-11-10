package com.example.knowuproject.modelo;



import javax.validation.constraints.*;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;


    @NotNull
    @NotBlank
    @Size(min = 5, max = 50)
    @Pattern(regexp = "[A-Z][a-z]+",
            message = "O nome não pode conter sua primeira letra miniscula. Digite um nome válido.")
    @Pattern(regexp = "^[a-zA-Z0-9-Zàèìòùáéíóúâêîôûãõ\b]+$",
            message = "O nome não deve conter caracteres especiais. Digite um nome válido.")
    @Pattern(regexp = "[^\\d]+",
            message = "O nome não deve conter numeros. Digite um nome válido.")
    private String nome;

    @NotNull
    @NotBlank
    @Size(min = 5, max = 15)
    @Pattern(regexp = "^[a-zA-Z0-9-Zàèìòùáéíóúâêîôûãõ\b]+$",
            message = "O nickname não deve conter caracteres especiais. Digite um nickname válido. EX: dylancolonhesi")
    @Pattern(regexp = "[^\\d]+",
            message = "O nickname não deve conter numeros. Digite um nickname válido. EX: dylancolonhesi")
    private String usuario;


    private String celular;


    @Email(message = "Digite um email válido. EX: seuemail@email.com")
    @NotNull
    @NotBlank
    private String email;


    private String descricao;

    @NotNull
    @NotBlank
    @Size(min = 11)
    @Pattern(regexp = "/^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$/",
            message = "O CPF não deve conter números ou caracteres especiais. Digite um CPF válido. EX: 000.000.000-00")
    private String cpf;

    @NotNull
    @NotBlank
    @Size(min = 11, message = "Digite uma data de nascimento válida.")
    private String dataNascimento;


    @NotNull(message = "O genero não pode ser em branco.")
    @NotBlank(message = "O campo genero não deve conter espaços em branco.")
    @Size(min = 5, max = 50)
    @Pattern(regexp = "^[a-zA-Z0-9-Zàèìòùáéíóúâêîôûãõ\b]+$",
            message = "O nome não deve conter caracteres especiais. Digite um genero válido. EX: Não-Binário")
    @Pattern(regexp = "[^\\d]+",
            message = "O genero não deve conter numeros. Digite um genero válido. EX: Feminino")
    private String genero;

    @NotNull(message = "A senha não pode ser em branco. EX: Abc@1234")
    @NotBlank(message = "A senha não deve conter espaços em branco. EX: Abc@1234")
    @Size(min = 8, max = 20, message = "A senha deve conter no maximo 8 caracteres. EX: Abc@1234")
    private String senha;


    private Integer codigoRecuperaSenha;
//    private Boolean isBloqueado = false;
    private Boolean autenticado;
    private String autenticadoEm;
    //    private String localizacao;
    @OneToOne
    private Localidade localidade;

    public Usuario(Integer idUsuario, String nome, String usuario, String celular, String email, String cpf, String dataNascimento, String genero) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.usuario = usuario;
        this.celular = celular;
        this.email = email;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
    }

    public Usuario() {

    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String senha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Integer getCodigoRecuperaSenha() {
        return codigoRecuperaSenha;
    }

    public void setCodigoRecuperaSenha(Integer codigoRecuperaSenha) {
        this.codigoRecuperaSenha = codigoRecuperaSenha;
    }

//    public Boolean getBloqueado() {
//        return isBloqueado;
//    }

//    public void setBloqueado(Boolean bloqueado) {
//        isBloqueado = bloqueado;
//    }


    public Localidade getLocalidade() {
        return localidade;
    }

    public void setLocalidade(Localidade localidade) {
        this.localidade = localidade;
    }

//    Fim Getters e Setters


    public void bloquearUsuario(String usuario, String motivo) {
        if (usuario.equals(getUsuario())) {
            System.out.println("Usuário bloqueado pelo motivo:" + motivo + "");
//            setBloqueado(true);
        }
    }

    public void desbloquearUsuario(String usuario) {
        if (usuario.equals(getUsuario())) {
            System.out.println("Usuário " + usuario + " desbloqueado com sucesso");
//            setBloqueado(true);
        }
    }

    public void avaliarUsuario(String usuario, Integer nota, String comentario) {
        System.out.println("Avaliação realizada");
    }

    public Boolean getAutenticado() {
        return autenticado;
    }

    public String getAutenticadoEm() {

        return autenticadoEm;
    }

    public void setAutenticado(Boolean autenticado) {
        this.autenticado = autenticado;
    }

    public void setAutenticadoEm(String data) {

        this.autenticadoEm = data;
    }


    public void login() {

        this.setAutenticado(true);
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        this.setAutenticadoEm(LocalDateTime.now().format(formato));

        this.localidade = new Localidade().buscarLocalizacao();

//        this.setLocalizacao(localidadeGoogle.getResults().get(0).toString());
    }

    public void logoff() {
        this.setAutenticadoEm(null);
        this.setAutenticado(false);
    }

    @Override
    public String toString() {
        return String.format("Usuário\n" +
                             "ID usuário: %d\n" +
                             "Nome usuário: %s\n" +
                             "Celular: %s\n" +
                             "Email: %s\n" +
                             "Usuário: %s\n" +
                             "Descrição: %s\n" +
                             "CPF: %s\n" +
                             "Data Nascimento: %s\n" +
                             "Gênero: %s\n" +
                             "Senha: %s\n" +
                             "Código recuperação de senha: %d\n" +
                             "Usuário autenticado: %b\n" +
                             "Autenticado em: %s",
                             this.idUsuario,
                             this.nome,
                             this.celular,
                             this.email,
                             this.usuario,
                             this.descricao,
                             this.cpf,
                             this.dataNascimento,
                             this.genero,
                             this.senha,
                             this.codigoRecuperaSenha,
                             this.autenticado,
                             this.autenticadoEm);
    }
}
