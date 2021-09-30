package com.example.knowuproject;

import com.example.knowuproject.login.Result;
import com.example.knowuproject.login.LocalidadeGoogle;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

public class Evento implements Localizavel{
    private Integer idEvento;
    private String nome;
    private String descricao;
    private DateTimeFormat dataInicio;
    private DateTimeFormat dataFim;
    private List<Usuario> participantes;

    public Evento(Integer idEvento, String nome, String descricao, DateTimeFormat dataInicio, DateTimeFormat dataFim) {
        this.idEvento = idEvento;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.participantes = new ArrayList<>();
    }

    @Override
    public String getLocalizacao() {
        RestTemplate restTemplate = new RestTemplate();
        RestTemplateBuilder restTemplateBuilder = new RestTemplateBuilder();
        restTemplate = restTemplateBuilder.build();

        LocalidadeGoogle teste = restTemplate.getForObject("https://maps.google.com/maps/api/geocode/json?address=Rua+Haddock+Lobo+595,+Cerqueira+Cesar,SP&components=country:BR&key=AIzaSyBvroKF-1rTRd9K-L9P3ILzSCjcFLU1LkQ", LocalidadeGoogle.class);
        Result resultado = new Result();

        return resultado.getFormatted_address();
    }

    public Integer getIdEvento() {
        return idEvento;
    }

    public void setIdEvento(Integer idEvento) {
        this.idEvento = idEvento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public DateTimeFormat getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(DateTimeFormat dataInicio) {
        this.dataInicio = dataInicio;
    }

    public DateTimeFormat getDataFim() {
        return dataFim;
    }

    public void setDataFim(DateTimeFormat dataFim) {
        this.dataFim = dataFim;
    }

    public void adicionarParticipante(Usuario p){
        participantes.add(p);
    }
    public void exibirParticipantes(){
        for(Usuario p: participantes){
            System.out.println(p);
        }
    }
    public void removerParticipante(Integer id){
        for (Usuario p: participantes){
            if (p.getIdUsuario().equals(id)){
                participantes.remove(id);
            }
        }
    }

    @Override
    public String toString() {
        return "Evento{" +
                "idEvento=" + idEvento +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", dataInicio=" + dataInicio +
                ", dataFim=" + dataFim +
                ", participantes=" + participantes +
                '}';
    }
}
