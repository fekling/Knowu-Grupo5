package com.example.knowuproject.requisicao;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioCadastroSimplesTest {
    @Test
        // do pacote org.junit.jupiter.api...
    void construtorUsuarioCadastro_devePreencherCampos() {

        UsuarioCadastroSimples response = new UsuarioCadastroSimples("Felipe Kling",
                "Kling", "felipekling@gmail.com"
                , "48720865347", "13-02-1990", "Masculino", "Abcd@1234");

        assertEquals("Felipe Kling", response.getNome());
        assertEquals("Kling", response.getUsuario());
        assertEquals("felipekling@gmail.com", response.getEmail());
        assertEquals("48720865347", response.getCpf());
        assertEquals("13-02-1990", response.getDataNascimento());
        assertEquals("Masculino", response.getGenero());
        assertEquals("Abcd@1234", response.getSenha());
    }

}