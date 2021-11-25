import SidebarNavigation from "../components/SidebarNavigation/SidebarNavigation";
import "../assets/css/usuario-perfil.css";
import BoxInfosEvento from "../components/BoxInfosEvento/BoxInfosEvento";
import BoxInfosUsuario from "../components/BoxInfoUsuario/BoxInfosUsuario";
import * as BsIcons from "react-icons/bs";
import * as IoIosIcons from "react-icons/io";
import midia1 from '../assets/images/sistema/midia1.png';
import midia2 from '../assets/images/sistema/midia2.png';
import midia3 from '../assets/images/sistema/midia3.png';
import { useHistory } from "react-router-dom";
import React, { useState, useCallback } from "react";
import Api from "../components/Axios";

function UsuarioPerfil() {
    
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  id = 60;

  const history = useHistory()
  const [nome, setNome] = useState("")
  const [usuario, setUsuario] = useState("")
  const [site, setSite] = useState("")
  const [descricao, setDescricao] = useState("")

  const handleAtualizarDados = useCallback(
    async (dados) => {
      dados.preventDefault()
      if (nome == "" && usuario == "" && site == "" && descricao == "") {
        alert("Preencha um dos campos para salvar os dados!")
      } else {
        try {
          let params = {
            nome: nome,
            usuario: usuario,
            site: site,
            descricao: descricao

          }
          const response = await Api.patch("/usuarios/atualizarDadosConta/" + id, params)
          if (response.status === 200) {
            alert("Dados alterados com sucesso")
          }
        } catch (erro) {
          alert("Não foi possível realizar a alteração de dados");
        }
      }
    }, [nome, usuario, site, descricao, history])


  return (
    <>
      <SidebarNavigation />
      <section className="perfil-main">
        <div className="perfil-form">
          <label htmlFor="nomeCompleto" className="perfil-label">
            Nome Completo:
          </label>
          <br />
          <input
            type="text"
            name="nomeCompleto"
            id="nomeCompleto"
            placeholder="Digite seu nome completo"
            className="perfil-input"
            onChange={(dados) => setNome(dados.target.value)}
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="nomeUsuario" className="perfil-label">
            Nome de Usuário:
          </label>
          <br />
          <input
            type="text"
            name="nomeUsuario"
            id="nomeUsuario"
            placeholder="Digite o nome desejado"
            className="perfil-input"
            onChange={(dados) => setUsuario(dados.target.value)}
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="site" className="perfil-label">
            Site:
          </label>
          <br />
          <input
            type="url"
            name="site"
            id="site"
            className="perfil-input"
            onChange={(dados) => setSite(dados.target.value)}
          />
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
          <br />
          <label htmlFor="descricao" className="perfil-label">
            Descrição:
          </label>
          <br />
          <textarea
            name="descricao"
            id="descricao"
            cols="68"
            rows="10"
            className="perfil-textarea"
            onChange={(dados) => setDescricao(dados.target.value)}
          ></textarea>
          <button className="perfil-btn-editar">
            <BsIcons.BsPencilFill />
          </button>
        </div>
        <div className="perfil-midia">
          <h1 className="perfil-midia-titulo">Midia:</h1>
          <button className="perfil-midia-btn">
            <IoIosIcons.IoIosAddCircle />
          </button>
          <button onClick={handleAtualizarDados}>ATUALIZAR</button>
          <img className="perfil-midia-image" src={midia3} alt="" />
          <img className="perfil-midia-image" src={midia2} alt="" />
          <img className="perfil-midia-image" src={midia1} alt="" />
        </div>
      </section>

      <div className="container-home"></div>
      <div className="container-home-aside">
        <BoxInfosEvento titulo="Eventos!" />
        <BoxInfosUsuario titulo="Usuários perto de você!" />
      </div>
    </>
  );
}

export default UsuarioPerfil;
