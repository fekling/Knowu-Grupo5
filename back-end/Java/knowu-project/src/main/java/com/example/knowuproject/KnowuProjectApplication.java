package com.example.knowuproject;

import com.example.knowuproject.controle.UsuarioController;
import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.repositorio.UsuarioRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class KnowuProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(KnowuProjectApplication.class, args);
//		UsuarioController.listaUsuarioDocLayout();
		//Usuario user = new Usuario(1,"Renato", "Ren", "(11)99999-9999", "mail@mail.com", "123.456.789-00", "11/05/92", "M");  //TESTE
		//Usuario user1 = new Usuario(1,"André", "Andrézito", "(11)88888-8888", "zzz@mail.com", "XXX.XXX.XXX-XX", "00/00/00", "M");  //TESTE
		//Usuario user2 = new Usuario(1,"Guilherme", "Gui", "(11)77777-7777", "yyy@mail.com", "YYY.YYY.YYY-YY", "11/11/11", "M");  //TESTE

		//List<Usuario> listaUsuarios = new ArrayList<>();

		//listaUsuarios.add(user);

		//Chamar método para gravar conteúdo da lista em arquivo txt

	}
}
