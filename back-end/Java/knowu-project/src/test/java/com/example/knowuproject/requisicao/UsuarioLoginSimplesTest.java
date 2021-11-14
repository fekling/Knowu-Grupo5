package com.example.knowuproject.requisicao;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioLoginSimplesTest {

    @Test
        // do pacote org.junit.jupiter.api...
    void construtorUsuarioSenhaLogin_devePreencherCampos() {

        UsuarioLoginSimples response = new UsuarioLoginSimples("Kling", "Abcd@1234");

        assertEquals("Kling", response.getUsuario());
        assertEquals("Abcd@1234", response.getSenha());
    }
}