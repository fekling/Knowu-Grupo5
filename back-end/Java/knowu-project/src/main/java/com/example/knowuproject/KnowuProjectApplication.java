package com.example.knowuproject;

import com.example.knowuproject.modelo.Usuario;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class KnowuProjectApplication {

	public static void gravaRegistroAluno(String registro, String nomeArq) {
		BufferedWriter saida = null;
		//Abre Arquivo
		try {
			saida = new BufferedWriter(new FileWriter(nomeArq, true));
		} catch (IOException erro) {
			System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
		}
		//Grava o registro e fecha o arquivo, mas ainda não gravou o arquivo!
		try {
			saida.append(registro + "\n");
			saida.close();
		} catch (IOException erro) {
			System.out.println("Erro ao gravar no arquivo: " + erro.getMessage());
		}
	}

	public static void gravaArquivoTxt(List<Usuario> lista, String nomeArq) {
		int contaRegDados = 0; //São os registros de corpo do documento de layout

		//Monta o registro de Header
		String header = "LISTA_USUARIOS_"; //Aqui é onde cria o documento de layout
		Date dataDeHoje = new Date(); 		//Formato no padrão Java, não é o desejado, então criar objeto para formatar...
		SimpleDateFormat formataData = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"); //Data e horário formatado
		header += formataData.format(dataDeHoje);
		header += "US00"; //‘String’ para mostrar a versão do documento

		//Grava o registro de header
		gravaRegistroAluno(header, nomeArq);

		//Monta e grava o corpo do arquivo
		for (Usuario user : lista) {
			String corpo = "US01"; //Recebe o registro de dados (seguindo o documento de layout)
			corpo += String.format("%4d", user.getIdUsuario());
			corpo += String.format("%-50s", user.getNome());
			corpo += String.format("%-10s", user.getUsuario()); //VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
			corpo += String.format("%-14s", user.getCelular());
			corpo += String.format("%-40s", user.getEmail());
			//corpo += String.format("%-40.40s", user.getDescricao());
			corpo += String.format("%-14s", user.getCpf());
			corpo += String.format("%-10s", user.getDataNascimento());
			corpo += String.format("%-15s", user.getGenero());
			//corpo += String.format("%05d", user.getCodigoRecuperaSenha());
			//corpo += String.format("%b", user.getAutenticado());
			//corpo += String.format("%-40.40s", user.getAutenticadoEm());

			contaRegDados++;
			gravaRegistroAluno(corpo, nomeArq);
		}

		//Monta e grava o registro Usuário trailer
		String trailer = "US02"; 							//Lá do documento de layout
		trailer += String.format(": %d dados registrados", contaRegDados);
		gravaRegistroAluno(trailer, nomeArq);
	}

	public static void leArquivoUsuarioTxt(String nomeArq) {
		BufferedReader entrada = null;
		String registro;
		String tipoRegistro;

		//Atributos para
		int idUsuario;
		String nome;
		String usuario;  //VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
		String celular;
		String email;
		String cpf;
		String dataNascimento;
		String genero;
		//String localizacao;
		int qtdRegistrosGravados;
		int contaRegDados = 0;

		List<Usuario> listaLidaDeUsuarios = new ArrayList<>();

		//Abre o arquivo
		try {
			entrada = new BufferedReader(new BufferedReader(new FileReader(nomeArq)));
		} catch (IOException erro) {
			System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
		}

		//Lê o arquivo
		try {
			//lê o primeiro registro do arquivo
			assert entrada != null;
			registro = entrada.readLine();
			while (registro != null) { 					//Enquanto diferir de NULL é porque não chegou ao fim do arquivo
				tipoRegistro = registro.substring(0,4); //lê o 0, 1, 2 e 3, mas vai até o 4, então no próximo começa do 4 até o seu final
				if (tipoRegistro.equals("US00")) {
					System.out.println("Header");
					System.out.println("Tipo de arquivo: " + registro.substring(4,11));
					System.out.println("Data/hora de gravação do arquivo: " + registro.substring(11,30));
					System.out.println("Versão do layout: " + registro.substring(30,33));

				} else if (tipoRegistro.equals("US02")) {
					System.out.println("Trailer");
					qtdRegistrosGravados = Integer.parseInt(registro.substring(4,9));
					if (qtdRegistrosGravados == listaLidaDeUsuarios.size()){
						System.out.println("Quantidade de registros gravados compatível com a quantidade lida");
					} else {
						System.out.println("Quantidade de registros gravados não confere com a quantidade lida");
					}

				} else if (tipoRegistro.equals("US01")) {
					System.out.println("Corpo");
					idUsuario = Integer.parseInt(registro.substring(4,9));
					nome = registro.substring(9,59);
					usuario = registro.substring(59,70); 					//VERIFICAR SEQUÊNCIA DOS ATRIBUTOS DA CLASSE USUÁRIO!
					celular = registro.substring(70,84); //trim();
					email = registro.substring(84,124); //trim();
					cpf = registro.substring(124,138);
					dataNascimento = registro.substring(138,148);
					genero = registro.substring(148,163);
					//localizacao = registro.substring(105,110);
					Usuario user = new Usuario(idUsuario, nome, usuario, celular, email, cpf, dataNascimento, genero);
					listaLidaDeUsuarios.add(user);
					//contaRegDados++;
				} else {
					System.out.println("Tipo de registro inválido!");
				}
				//Lê o próximo registro
				registro = entrada.readLine();
			}

			entrada.close();

		} catch(IOException erro){
			System.out.println("Erro ao ler o arquivo: " + erro.getMessage());
		}

		System.out.println("\nConteúdo lido do arquivo");
		for (Usuario user : listaLidaDeUsuarios){
			System.out.println(user);
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(KnowuProjectApplication.class, args);
<<<<<<< HEAD
=======

		Usuario user = new Usuario(1,"Renato", "Ren", "(11)99999-9999", "mail@mail.com", "123.456.789-00", "11/05/92", "M");  //TESTE
		Usuario user1 = new Usuario(1,"André", "Andrézito", "(11)88888-8888", "zzz@mail.com", "XXX.XXX.XXX-XX", "00/00/00", "M");  //TESTE
		Usuario user2 = new Usuario(1,"Guilherme", "Gui", "(11)77777-7777", "yyy@mail.com", "YYY.YYY.YYY-YY", "11/11/11", "M");  //TESTE

		List<Usuario> listaUsuarios = new ArrayList<>();

		listaUsuarios.add(user);

		//Chamar método para gravar conteúdo da lista em arquivo txt
		gravaArquivoTxt(listaUsuarios, "C:\\Program Files\\JetBrains\\usuarios.txt");
>>>>>>> 5db286cf8426a4234d0b1c3763f069047ecb1043
	}
}
