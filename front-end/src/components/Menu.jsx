import React, {useEffect, useCallback} from 'react';
import logo from '../assets/images/logo.png'
import "../assets/css/cadastro-style.css"
import { Link } from 'react-router-dom';

function Menu(){

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    id = 1;

    const home = useCallback(
        async(dados) => {
          dados.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html`;
        }
      )

      const sobre_nos = useCallback(
        async(dados2) => {
          dados2.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#sobre_nos`;
        }
      )
      
      const contato = useCallback(
        async(dados2) => {
          dados2.preventDefault();
          window.location = `https://fekling.github.io/Knowu-Grupo5/front-end/src/assets/html/index.html#contato`;
        }
      )

    return(
        <>
        <header className="cadastro-header">

            <div class="logoCadastro">
                <img class="img" src={logo} alt="logo" />
            </div>

            <div class="menu">
                <a onClick={home}>Home</a>
                <a onClick={sobre_nos}>Sobre nós</a>
                <a onClick={contato}>Contato</a>
            </div>

            <div class="botao">
                <h1 className="menu-provisorio">Menu</h1>
                <Link to={"/login"}>
                <button class="botao-cadastro"><b>Entrar</b></button>
                </Link>
            </div>


        </header>
        </>
    )
}

export default Menu;