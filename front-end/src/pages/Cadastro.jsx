import React, { useState, useCallback } from 'react';
import BackgroundColor from '../components/BackgroundColor';
import Menu from '../components/Menu';
import Api from '../components/Axios';
import { useHistory } from "react-router-dom"




function Index() {
    const history = useHistory()

    const [usuario, setUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [genero, setGenero] = useState("")
    // const [error, setError] = useState("")

    const handleCadastro = useCallback(
        async (dados) => {
            dados.preventDefault()
            if (cpf == "" || usuario == "" || email == "" || senha == "" || nome == "" || dataNascimento == "" || genero == "") {
                alert("Preencha todos os campos!")
            } else {
                try {
                    let params = {
                        usuario: usuario,
                        email: email,
                        senha: senha,
                        nome: nome,
                        cpf: cpf,
                        dataNascimento: dataNascimento,
                        genero: genero
                        
                    }
                    const response = await Api.post("/usuarios/adicionar", params)
                    if (response.status === 201) {
                        // const usuarioString = JSON.stringify(response.data)
                        // localStorage.setItem("usuario", usuarioString)
                        // const objetoEmFormatoDeString = localStorage.getItem('usuario');
                        // const objetoMesmo = JSON.parse(objetoEmFormatoDeString)
                        history.push("/login")
                    }
                } catch (erro) {
                   alert("teste");
                }
            }
        }, [usuario, email, senha, nome, cpf, dataNascimento, genero, history])


    return (
        <>
            <BackgroundColor />
            <Menu />
            <div class="container-cadastro">
            <form id="formulario-cadastro" onSubmit={handleCadastro}>
                <h1 class="titulo-cadastro">Cadastre-se e conheça pessoas incriveis!</h1>
                <div class="content-cadastro">

                    <div class="campo-direita">
                        
                            <input type="text" class="input-senha-cadastro" placeholder="Nome de usuário" id="usuario" onChange={dados => setUsuario(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="Email" id="email" onChange={dados => setEmail(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="senha" id="senha" onChange={dados => setSenha(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="Confirme sua senha" />
                        
                    </div>
                    <div class="campo-esquerda">
                            <input type="text" class="input-senha-cadastro" placeholder="Nome completo" id="nome" onChange={dados => setNome(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="CPF" id="cpf" onChange={dados => setCpf(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="Data de nascimento" id="dataNascimento" onChange={dados => setDataNascimento(dados.target.value)} />
                            <input type="text" class="input-senha-cadastro" placeholder="Gênero" id="genero" onChange={dados => setGenero(dados.target.value)} />

                    </div>

                </div>

                <button class="btn-cadastro" type="submit">Cadastrar</button>
                </form>
            </div>
        </>

    );
}


export default Index;