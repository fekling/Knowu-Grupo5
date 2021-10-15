import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AlterarSenha from './pages/alterar-senha'
import RecuperarSenha from './pages/recuperar-senha';
import EsqueceuSenha from './pages/esqueceu-senha';
import Cadastro from './pages/Cadastro';
import Login from './pages/login';
import PerfilUsuario from './pages/perfil-usuario';


function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/perfil" component={PerfilUsuario}/>
                <Route exact path="/recuperar-senha" component={RecuperarSenha}/>
                <Route exact path="/esqueceu-senha" component={EsqueceuSenha}/>
                <Route exact path="/alterar-senha" component={AlterarSenha}/>
            </Switch>
        </Router>
    );
}

export default Routes;