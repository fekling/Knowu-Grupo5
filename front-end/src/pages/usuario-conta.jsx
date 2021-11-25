import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import '../assets/css/usuario-conta.css';
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import * as BsIcons from "react-icons/bs";
import imagemUsuario from '../assets/images/sistema/imgDefault.png';
import { useHistory } from "react-router-dom";
import React, { useState, useCallback } from "react";
import Api from "../components/Axios";


function UsuarioConta() {

  
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  id = 60;

  const history = useHistory()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [genero, setGenero] = useState("")

  const handleAtualizarDados = useCallback(
    async (dados) => {
      dados.preventDefault()
      if (email == "" && senha == "" && dataNascimento == "" && genero == "") {
        alert("Preencha um dos campos para salvar os dados!")
      } else {
        try {
          let params = {
            email: email,
            senha: senha,
            dataNascimento: dataNascimento,
            genero: genero

          }
          const response = await Api.patch("/usuarios/atualizarDadosConta/" + id, params)
          if (response.status === 200) {
            alert("Dados alterados com sucesso")
          }
        } catch (erro) {
          alert("Não foi possível realizar a alteração de dados");
        }
      }
    }, [email, senha, dataNascimento, genero, history])


  return (
    <>
      <SidebarNavigation titulo1="Postagens" titulo2="Perfil" titulo3="Conta" />
      <section className="conta-main">
        <div className="conta-infos">
          <img className="conta-info-foto" src={imagemUsuario} alt="" />
          <h1 className="conta-info-nome">André Santos</h1>
          <h3 className="conta-info-usuario">@Andezito</h3>
        </div>
        <div className="conta-form">
          <label htmlFor="dataNascimento" className="conta-label">
            Data Nascimento:
          </label>
          <br />
          <input
            type="text"
            name="dataNascimento"
            id="dataNascimento"
            className="conta-input"
            onChange={(dados) => setDataNascimento(dados.target.value)}
          />
          <button className="conta-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="nomeUsuario" className="conta-label">
            Gênero:
          </label>
          <br />
          <input
            type="text"
            name="nomeUsuario"
            id="nomeUsuario"
            className="conta-input"
            onChange={(dados) => setGenero(dados.target.value)}
          />
          <button className="conta-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="email" className="conta-label">
            E-mail:
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="conta-input"
            onChange={(dados) => setEmail(dados.target.value)}
          />
          <a className="conta-alterar" href="#">Alterar email?</a>
          <br />
          <label htmlFor="senha" className="conta-label">
            Senha:
          </label>
          <br />
          <input
            type="password"
            name="senha"
            id="senha"
            className="conta-input"
            onChange={(dados) => setSenha(dados.target.value)}
          />
          <a className="conta-alterar" href="#">Alterar senha?</a>
          <button onClick={handleAtualizarDados}>ATUALIZAR</button>
        </div>
      </section>
      <div className="container-home"></div>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!" />
        <BoxInfosUsuario titulo="Usuários próximos!" />
      </div>
    </>
    
  );
  
}

export default UsuarioConta;