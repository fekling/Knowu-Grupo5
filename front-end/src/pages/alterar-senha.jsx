import React, { useState, useCallback } from 'react';
import seta from "../assets/images/seta.png";
import bg from "../assets/images/bg-color.png";
import Logo from "../assets/images/logo.png";
import "../assets/css/react.css";
import Api from '../components/Axios';
import { useHistory } from "react-router-dom"

function Index() {

  const history = useHistory()

  const [senha, setSenha] = useState("")
  const [confSenha, setConfSenha] = useState("")
  // const [error, setError] = useState("")

  const handleTrocarSenha = useCallback(
    async (dados) => {
      dados.preventDefault()
      if (senha != confSenha) {
        alert("Suas senhas não coincidem!")
      } else {
        try {
          let params = {

            senha: senha

          }
          const response = await Api.patch(`/usuarios/atualizarDadosConta/${sessionStorage.id_usuario}`, params)
          if (response.status === 200) {
            // const id = JSON.stringify(response.data)
            // sessionStorage.id_usuario = id;

            history.push("/login")
          }
        } catch (erro) {
          alert(erro);
        }
      }
    }, [senha, history])
  return (
    <div className="content">
      <img src={bg} alt="" className="bg-color" />
      <div className="meio">
        <div className="header">
          <img src={seta} alt="" className="seta" />
          <h1 className="text-voltar">Voltar</h1>
        </div>
        <img src={Logo} alt="" className="logo" />
        <h1 className="texto">Altere sua senha:</h1>
        <form onSubmit={handleTrocarSenha}>
          <input type="text" placeholder="Senha" className="input" onChange={dados => setSenha(dados.target.value)} />
          <input type="text" placeholder="Confirme sua senha" className="input" onChange={dados => setConfSenha(dados.target.value)} />
          <button className="confirmar" type="submit">Alterar</button>
        </form>
      </div>
    </div>
  );
}

export default Index;
