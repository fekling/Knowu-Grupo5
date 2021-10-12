import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AlterarSenha from './pages/alterar-senha'


function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/login" component={AlterarSenha}/>
                <Route exact path="/cadastro" component={AlterarSenha}/>
                <Route exact path="/recuperar-senha" component={AlterarSenha}/>
                <Route exact path="/notificacao-senha" component={AlterarSenha}/>
                <Route exact path="/alterar-senha" component={AlterarSenha}/>
            </Switch>
        </Router>
    );
}

export default Routes;