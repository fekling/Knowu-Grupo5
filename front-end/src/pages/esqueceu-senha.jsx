import React, { useState, useCallback } from 'react';
import "../assets/css/react.css";
import Seta from "../assets/images/seta.png";
import Logo from "../assets/images/logo.png";
import Sino from "../assets/images/sino.png";
import Bg from "../assets/images/bg-color.png"
import Btn from "../components/BtnEsqueceuSenha";
import Api from '../components/Axios';
import { useHistory } from "react-router-dom"

function Index() {

  const history = useHistory()

  const [email, setEmail] = useState("")
  // const [error, setError] = useState("")

  const handleEnviarCodigo = useCallback(
    async (dados) => {
      dados.preventDefault()
      if (email == "") {
        alert("Preencha o seu email")
      } else {
        try {
          let params = {

            email: email

          }
          const response = await Api.put("/usuarios/enviarCodigo", params)
          if (response.status == 200) {
            // const usuarioString = JSON.stringify(response.data)
            // localStorage.setItem("usuario", usuarioString)
            // const objetoEmFormatoDeString = localStorage.getItem('usuario');
            // const objetoMesmo = JSON.parse(objetoEmFormatoDeString)
            history.push("/recuperar-senha")
          } else {
            alert("Insira um email cadastrado!")
          }
        } catch (erro) {
          alert("teste");
        }
      }
    }, [email, history])


  return (
    <div className="content-esqueceu-senha">
      <img src={Bg} alt="" className="bg-color" />
      <div className="header-esqueceu-sua-senha">
          <img src={Seta} alt="" className="seta-esqueceu-sua-senha" />
          <h1 className="text-voltar">Voltar</h1>
        </div>
      <div className="meio-esqueceu-sua-senha">
 

        <img src={Logo} alt="" className="logo-esqueceu-sua-senha" />
        <img src={Sino} alt="" className="icons-esqueceu-sua-senha" />
        <h1 className="texto-esqueceu-sua-senha">Esqueceu a senha?</h1>
        <h2 className="sub-titulo-esqueceu-sua-senha">
          Vamos te enviar um link para seu email cadastrado para que possamos alterar sua senha.
        </h2>
        <form className="form-esqueceu-sua-senha" onSubmit={handleEnviarCodigo}>
          <input type="text" placeholder="Email cadastrado" className="input-esqueceu-sua-senha" onChange={dados => setEmail(dados.target.value)} />
          <button className="botao-esqueceu-sua-senha" type="submit">Enviar código</button>
        </form>
      </div>
    </div>
  );
}

export default Index;