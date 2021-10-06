package com.example.knowuproject.modelo;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;
    private String nome;
    private String celular;
    private String email;
    private String usuario;
    private String descricao;
    private String cpf;
    private String dataNascimento;
    private String genero;
    private String senha;
    private Integer codigoRecuperaSenha;
//    private Boolean isBloqueado = false;
    private Boolean autenticado;
    private String autenticadoEm;
    //    private String localizacao;
    @OneToOne
    private Localidade localidade;

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
        return "Usuario{" +
                "idUsuario=" + idUsuario +
                ", nome='" + nome + '\'' +
                ", celular='" + celular + '\'' +
                ", email='" + email + '\'' +
                ", usuario='" + usuario + '\'' +
                ", descricao='" + descricao + '\'' +
                ", cpf='" + cpf + '\'' +
                ", dataNascimento='" + dataNascimento + '\'' +
                ", genero='" + genero + '\'' +
                ", senha='" + senha + '\'' +
                ", codigoRecuperaSenha='" + codigoRecuperaSenha + '\'' +
                ", autenticado=" + autenticado +
                ", autenticadoEm='" + autenticadoEm + '\'' +
                '}';
    }
}
