import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AlterarSenha from './pages/alterar-senha'
import RecuperarSenha from './pages/recuperar-senha';
import EsqueceuSenha from './pages/esqueceu-senha';
import Cadastro from './pages/Cadastro';
import Login from './pages/login';
import UsuarioPostagens from './pages/usuario-postagens';
import UsuarioPerfil from './pages/usuario-perfil';
import UsuarioConta from './pages/usuario-conta';


function Routes(){
    return(
        <Router>    
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/recuperar-senha" component={RecuperarSenha}/>
                <Route exact path="/esqueceu-senha" component={EsqueceuSenha}/>
                <Route exact path="/alterar-senha" component={AlterarSenha}/>
                <Route exact path="/usuario/postagens" component={UsuarioPostagens}/>
                <Route exact path="/usuario/perfil" component={UsuarioPerfil}/>
                <Route exact path="/usuario/conta" component={UsuarioConta}/>
            </Switch>
        </Router>
    );
}

export default Routes;