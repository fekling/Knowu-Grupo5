import React, { useState, useCallback } from 'react';
import "../assets/css/react.css";
import Seta from "../assets/images/seta.png";
import Logo from "../assets/images/logo.png";
import Wifi from "../assets/images/wifi.png";
import Bg from "../assets/images/bg-color.png"
import Api from '../components/Axios';
import { useHistory } from "react-router-dom"

function Index() {

  const history = useHistory()

  const [codigoRecuperaSenha, setCodigoRecuperaSenha] = useState("")
  // const [error, setError] = useState("")

  const handleValidarCodigo = useCallback(
    async (dados) => {
      dados.preventDefault()
      if (codigoRecuperaSenha === "") {
        alert("Preencha o código enviado pelo email")
      } else {
        try {
          let params = {
            
            codigoRecuperaSenha: codigoRecuperaSenha

          }
          const response = await Api.post("/usuarios/validarCodigo", params)
          if (response.status === 200) {
            const id = JSON.stringify(response.data)
            sessionStorage.id_usuario = id;
            
            history.push("/alterar-senha")
          } else {
            alert("Insira o código correto!")
          }
        } catch (erro) {
          alert(erro);
        }
      }
    }, [codigoRecuperaSenha, history])

  return (
    <div className="content">
      <img src={Bg} alt="" className="bg-color" />
      <div className="meio">
        <div className="header">
          <img src={Seta} alt="" />
          <h1 className="text-voltar">Voltar</h1>
        </div>

        <img src={Logo} alt="" className="logo" />
        <img src={Wifi} alt="" className="wifi" />
        <h1 className="texto">Insira o código que te enviamos</h1>
        <form onSubmit={handleValidarCodigo}>
          <input type="text" placeholder="Código" className="input" onChange={dados => setCodigoRecuperaSenha(dados.target.value)} />
          <button className="confirmar" type="submit">Confirmar</button>
        </form>
        <div className="reenviar">
          Não recebeu o código? <u>Reenviar</u>
        </div>
      </div>
    </div>
  );
}

export default Index;
