import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AlterarSenha from './pages/alterar-senha'


function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={AlterarSenha}/>
            </Switch>
        </Router>
    );
}

export default Routes;