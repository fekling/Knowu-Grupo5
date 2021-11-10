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
	}
}
