import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/alterar-senha.css';

export class AlterarSenha extends Component {
    render() {
        return (
            <section>

                <div class="container">
             
                <img src={logo} alt="logo" class="logo" />
                

                <div class ="content">
                <h1 class ="titulo">Altere sua senha: </h1>
                <input type ="text" class ="input-senha" placeholder="senha"/>
                <input type ="text" class ="input-senha" placeholder="Confirme sua senha"/>
                <button class ="btn"><a href="">Altere sua senha</a></button>
                </div> 


                </div>
            </section>
        );
    }
}

export default AlterarSenha;

