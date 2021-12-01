import React, { useState, useCallback } from "react";
import seta from "../assets/images/seta.png";
import bg from "../assets/images/bg-color.png";
import Logo from "../assets/images/logo.png";
import "../assets/css/react.css";
import Api from "../components/Axios";
import { useHistory } from "react-router-dom";

function Index() {
  const history = useHistory();

  const [senha, setSenha] = useState();
  const [confSenha, setConfSenha] = useState();

  const voltar = useCallback(
    async(dados) => {
      dados.preventDefault();
      history.push("/recuperar-senha")
    }
  )

  const handleTrocarSenha = useCallback(
    async (dados) => {
      dados.preventDefault();
      if (senha != confSenha) {
        alert(senha)
        alert(confSenha)
        alert("Suas senhas não coincidem!");
      } else {
        try {
          let params = {
            senha: senha,
          };
          const response = await Api.patch(
            `/usuarios/atualizarDadosConta/${sessionStorage.id_usuario}`,
            params
          );
          if (response.status === 200) {
            history.push("/login");
          }
        } catch (erro) {
          alert(erro);
        }
      }
    },
    [senha, confSenha, history]
  );
  return (
    <div className="content-esqueceu-senha">
      <img src={bg} alt="" className="bg-color" />
      <div className="header-esqueceu-sua-senha" onClick={voltar}>
        <img src={seta} alt="" className="seta-esqueceu-sua-senha" />
        <h1 className="text-voltar">Voltar</h1>
      </div>
      <div className="meio-esqueceu-sua-senha">
        <img src={Logo} alt="" className="logo-esqueceu-sua-senha" />
        <h1 className="texto-esqueceu-sua-senha">Altere sua senha:</h1>
        <form className="form-esqueceu-sua-senha" onSubmit={handleTrocarSenha}>
          <input
            type="password"
            placeholder="Senha"
            className="input-esqueceu-sua-senha"
            onChange={(dados) => setSenha(dados.target.value)}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="input-esqueceu-sua-senha"
            onChange={(dados) => setConfSenha(dados.target.value)}
          />
          <button className="botao-esqueceu-sua-senha" type="submit">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Index;
