import React, { Component } from 'react';
import logo from '../../img/logo.png';
import sino from '.../../img/sino.png';
import './styletwo.css';

export class AlterarSenhaEmail extends Component {
    render() {
        return (
            <section>
                
                <div class="container">
                

                <img src={logo} alt="logo" id="logo" />
                <img src={sino} alt="logo" class="sino" />
                

                <div class ="content">
                <h1 class ="titulo">Esqueceu a senha?</h1>
                <p>Vamos te enviar um link para seu email cadastrado para que possamos alterar sua senha.</p>
                <input type="text" placeholder="Email cadastrado"/>
                <button class ="btn"><a href="">Altere sua senha</a></button>
                </div> 


                </div>
            </section>
        );
    }
}

export default AlterarSenhaEmail;