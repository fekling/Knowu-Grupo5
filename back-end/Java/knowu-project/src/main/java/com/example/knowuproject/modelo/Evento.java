package com.example.knowuproject.modelo;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Optional;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEvento;
    private String nome;
    private String descricao;
    private DateTimeFormat dataInicio;
    private DateTimeFormat dataFim;
    @OneToOne
    private Optional<Usuario> usuario;


    public Evento(Integer idEvento, String nome, String descricao, DateTimeFormat dataInicio, DateTimeFormat dataFim) {
        this.idEvento = idEvento;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
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

    public Optional<Usuario> getUsuario() {
        return usuario;
    }

    public void setUsuario(Optional<Usuario> usuario) {
        this.usuario = usuario;
    }

    //    public void adicionarParticipante(Usuario p){
//        participantes.add(p);
//    }
//    public void exibirParticipantes(){
//        for(Usuario p: participantes){
//            System.out.println(p);
//        }
//    }
//    public void removerParticipante(Integer id){
//        for (Usuario p: participantes){
//            if (p.getIdUsuario().equals(id)){
//                participantes.remove(id);
//            }
//        }
   // }

    @Override
    public String toString() {
        return "Evento{" +
                "idEvento=" + idEvento +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", dataInicio=" + dataInicio +
                ", dataFim=" + dataFim +
                '}';
    }
}
