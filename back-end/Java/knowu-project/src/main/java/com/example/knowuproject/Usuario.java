package com.example.knowuproject;

import java.awt.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Usuario{
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
    private String codigoRecuperaSenha;
    private Boolean isBloqueado = false;
    private List<Usuario> avaliacao;


    public Usuario(Integer idUsuario, String nome, String celular, String email, String usuario, String descricao, String cpf, String dataNascimento, String genero, String senha) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.celular = celular;
        this.email = email;
        this.usuario = usuario;
        this.descricao = descricao;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.senha = senha;
        this.avaliacao = new ArrayList<>();
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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCodigoRecuperaSenha() {
        return codigoRecuperaSenha;
    }

    public void setCodigoRecuperaSenha(String codigoRecuperaSenha) {
        this.codigoRecuperaSenha = codigoRecuperaSenha;
    }

    public Boolean getBloqueado() {
        return isBloqueado;
    }

    public void setBloqueado(Boolean bloqueado) {
        isBloqueado = bloqueado;
    }

    public void bloquearUsuario(String usuario, String motivo){
        if (usuario.equals(getUsuario())){
            System.out.println("Usuário bloqueado pelo motivo:"+motivo+"");
            setBloqueado(true);
        }
    }
    public void desbloquearUsuario(String usuario){
        if (usuario.equals(getUsuario())){
            System.out.println("Usuário "+usuario+" desbloqueado com sucesso");
            setBloqueado(true);
        }
    }
    public void avaliarUsuario(String usuario, Integer nota, String comentario){
        System.out.println("Avaliação realizada");
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
                ", isBloqueado=" + isBloqueado +
                ", avaliacao=" + avaliacao +
                '}';
    }
}
