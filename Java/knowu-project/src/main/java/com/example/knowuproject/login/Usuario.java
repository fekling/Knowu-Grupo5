package com.example.knowuproject.login;

import com.example.knowuproject.Localizavel;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Usuario implements Localizavel {

    // Atributos

    private String usuario;
    private String nome;
    private String senha;
    private Boolean autenticado;
    private String autenticadoEm;
    private String localizacao;

    // Construtor

    public Usuario(String usuario, String nome, String senha) {
        this.usuario = usuario;
        this.nome = nome;
        this.senha = senha;
    }

    // Getters e Setters

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String senha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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

    @Override
    public String getLocalizacao() {

        return localizacao;
    }

    public void setLocalizacao(String localizacao) {

        this.localizacao = localizacao;
    }

    public void login() {

        this.setAutenticado(true);
        this.setAutenticadoEm(new SimpleDateFormat("dd/mm/yyyy HH:mm:ss").format(Calendar.getInstance().getTime()));
        RestTemplate restTemplate = new RestTemplate();
        RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();
        restTemplate = restTemplateBuilder.build();

        LocalidadeGoogle localidadeGoogle = restTemplate.getForObject("https://maps.google.com/maps/api/geocode/json?address=Rua+Haddock+Lobo+595,+Cerqueira+Cesar,SP&components=country:BR&key=AIzaSyBvroKF-1rTRd9K-L9P3ILzSCjcFLU1LkQ", LocalidadeGoogle.class);

        this.localizacao = localidadeGoogle.getResults().get(0).toString();

    }

    public void logoff() {
        this.setAutenticadoEm(null);
        this.setAutenticado(false);
        this.setLocalizacao(null);
    }
}
