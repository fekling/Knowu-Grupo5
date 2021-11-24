package com.example.knowuproject.controle;

import com.example.knowuproject.modelo.Localidade;
import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.repositorio.LocalidadeRepository;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class UsuarioControllerTest {

    @Autowired
    UsuarioController userController;

    @MockBean
    UsuarioRepository userRepository;

    @Test
    void getSemUsuarios_status200(){ //Teste quando não tem usuários
        when(userRepository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity response = userController.exibirUsuarios();

        assertEquals(204, response.getStatusCodeValue());
        assertNull(response.getBody());
        assertFalse(response.hasBody());
    }

    @Test
    void getUsuarios_status200(){ //Teste quando tem usuários
        List<Usuario> usersMock = List.of(mock(Usuario.class), mock(Usuario.class));
        when(userRepository.findAll()).thenReturn(usersMock);

        ResponseEntity response = userController.exibirUsuarios();

        assertEquals(200, response.getStatusCodeValue());
        assertTrue(response.hasBody());
        assertEquals(usersMock, response.getBody());
    }
}