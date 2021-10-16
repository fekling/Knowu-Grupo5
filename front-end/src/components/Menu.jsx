import React from 'react';
import logo from '../assets/images/logo.png'
import "../assets/css/cadastro-style.css"
function Menu(){
    return(
        <>
        <header>

            <div class="logoCadastro">
                <img class="img" src={logo} alt="logo" />
            </div>

            <div class="menu">
                <a href="">Home</a>
                <a href="">Sobre nós</a>
                <a href="">Contato</a>
            </div>

            <div class="botao">

                <button class="botao-cadastro"><b>Entrar</b></button>
            </div>


        </header>
        </>
    )
}

export default Menu;