package com.example.knowuproject.requisicao;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioCadastroSimplesTest {
    @Test
    @DisplayName("O construtor de cadastro deve estar preenchido")
        // do pacote org.junit.jupiter.api...
    void construtorUsuarioCadastro_devePreencherCampos() {

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("Dylan Colonhesi", cadastroTest.getNome());
        assertEquals("dylancolonhesi", cadastroTest.getUsuario());
        assertEquals("colonhesidylan@gmail.com", cadastroTest.getEmail());
        assertEquals("48720863845", cadastroTest.getCpf());
        assertEquals("13-02-2002", cadastroTest.getDataNascimento());
        assertEquals("Masculino", cadastroTest.getGenero());
        assertEquals("Abcd@1234", cadastroTest.getSenha());
    }


    @Test
    @DisplayName("O campo nome deve estar preenchido")
    void campoNomeDeveSerPreenchidoNoConstrutorSemCaracteresEspeciais(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("Dylan Colonhesi", cadastroTest.getNome());

    }

    @Test
    @DisplayName("O campo nome não deve ter caracteres especiais")
    void campoNomeNãoDeveTerMaisQue60Caracteres(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan  Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("Dylan Colonhesi", cadastroTest.getNome());

    }

    @Test
    @DisplayName("O campo usuario deve estar preenchido")
    void campoUsuarioDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("dylancolonhesi", cadastroTest.getUsuario());

    }

    @Test
    @DisplayName("O campo email deve estar preenchido")
    void campoEmailDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("colonhesidylan@gmail.com", cadastroTest.getEmail());

    }

    @Test
    @DisplayName("O campo CPF deve estar preenchido")
    void campoCPFDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("48720863845", cadastroTest.getCpf());

    }

    @Test
    @DisplayName("O campo data de nascimento deve estar preenchido")
    void campoDataDeNascimentoDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("13-02-2002", cadastroTest.getDataNascimento());

    }

    @Test
    @DisplayName("O campo genero deve estar preenchido")
    void campoGeneroDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("Masculino", cadastroTest.getGenero());

    }

    @Test
    @DisplayName("O campo senha deve estar preenchido")
    void campoSenhaDeveSerPreenchidoNoConstrutor(){

        UsuarioCadastroSimples cadastroTest = new UsuarioCadastroSimples("Dylan Colonhesi",
                "dylancolonhesi",
                "colonhesidylan@gmail.com",
                "48720863845", "13-02-2002",
                "Masculino", "Abcd@1234");

        assertEquals("Abcd@1234", cadastroTest.getSenha());

    }

}