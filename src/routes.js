import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//react-router-dom: permite criar rotas do front para back em forma de componentes
//BrowserRouter: é o que permite as rotas serem separadas por /

import Main from './pages/Main';
import Box from './pages/Box';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>

);

export default Routes;