package com.example.knowuproject;

import com.example.knowuproject.dto.Usuariodto;
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

	public static void gravaArquivoTxt(List<Usuariodto> lista, String nomeArq) {
		int contaRegDados = 0; //São os registros de corpo do documento de layout

		//Monta o registro de Header
		String header = "00NOTA20212"; //Aqui é onde cria o documento de layout
		Date dataDeHoje = new Date(); //Formato no padrão Java, não é o desejado, então criar objeto para formatar...
		SimpleDateFormat formataData = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"); //Data e horário formatado
		header += formataData.format(dataDeHoje);
		header += "01"; //String para mostrar a versão do documento

		//Grava o registro de header
		gravaRegistroAluno(header, nomeArq);

		//Monta e grava o corpo do arquivo
		for (Usuariodto user : lista) {
			String corpo = "02"; //Recebe o registro de dados (seguindo o documento de layout)
			//corpo += String.format("%05d", user.getIdUsuario());
			corpo += String.format("%-8.8s", user.getNome());
			//corpo += String.format("%-50.50s", user.getCelular());
			//corpo += String.format("%-40.40s", user.getEmail());
			corpo += String.format("%-40.40s", user.getUsuario());
			//corpo += String.format("%-40.40s", user.getDescricao());
			//corpo += String.format("%-40.40s", user.getCpf());
			//corpo += String.format("%-40.40s", user.getDataNascimento());
			//corpo += String.format("%-40.40s", user.getGenero());
			//corpo += String.format("%05d", user.getCodigoRecuperaSenha());
			corpo += String.format("%b", user.getAutenticado());
			corpo += String.format("%-40.40s", user.getAutenticadoEm());

			contaRegDados++;
			gravaRegistroAluno(corpo, nomeArq);
		}

		//Monta e grava o registro tUsuariorailler
		String trailler = "01"; //Lá do documento de layout
		trailler += String.format("%010d", contaRegDados); //%0 completa com 0 a esquerda
		gravaRegistroAluno(trailler, nomeArq);
	}

	public static void leArquivoUsuarioTxt(String nomeArq) {
		BufferedReader entrada = null;
		String registro;
		String tipoRegistro;

		//Atributos para
		//Integer idUsuario;
		String nome;
		//String celular;
		//String email;
		String usuario;
		//String cpf;
		//String dataNascimento;
		//String genero;
		String localizacao;
		int qtdRegistrosGravados;
		int contaRegDados = 0;

		List<Usuariodto> listaLidaDeUsuarios = new ArrayList<>();

		//Abre o arquivo
		try {
			entrada = new BufferedReader(new BufferedReader(new FileReader(nomeArq)));
		} catch (IOException erro) {
			System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
		}

		//Lê o arquivo
		try {
			//lê o primeiro registro do arquivo
			registro = entrada.readLine();
			while (registro != null) { //Enquanto for diferente de NULL é porque não chegou ao fim do arquivo
				tipoRegistro = registro.substring(0,2); //lê o 0 e 1 mas vai até o 2, então no próximo começa do 2 e até o fim dele
				if (tipoRegistro.equals("00")) {
					System.out.println("Header");
					System.out.println("Tipo de arquivo: " + registro.substring(2,6));
					System.out.println("XXXXXXXXXX: " + registro.substring(6,11));
					System.out.println("Data/hora de gravação: " + registro.substring(11,30));
					System.out.println("Versão do documento: " + registro.substring(30,32));

				} else if (tipoRegistro.equals("01")) {
					System.out.println("É um registro de trailler");
					qtdRegistrosGravados = Integer.valueOf(registro.substring(2,12));
					if (qtdRegistrosGravados == listaLidaDeUsuarios.size()){
						System.out.println("Quantidade de registros gravados compatível com quantidade lida");
					} else {
						System.out.println("Quantidade de registros gravados não confere com quantidade lida");
					}

				} else if (tipoRegistro.equals("02")) {
					System.out.println("Body");
					//idUsuario = Integer.valueOf(registro.substring(2,7));
					nome = registro.substring(7,15);
					//celular = registro.substring(15,65).trim();
					//email = registro.substring(65,105).trim();
					usuario = registro.substring(105,110);
					//cpf = registro.substring(110,113);
					//dataNascimento = registro.substring(110,113);
					//genero = registro.substring(110,113);
					localizacao = registro.substring(105,110);
					Usuariodto user = new Usuariodto(usuario, nome, localizacao);
					listaLidaDeUsuarios.add(user);
					//contaRegDados++;
				}
				else {
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
		for (Usuariodto user : listaLidaDeUsuarios){
			System.out.println(user);
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(KnowuProjectApplication.class, args);
		List<Usuariodto> listaUsuarios = new ArrayList<>();
	}
}
