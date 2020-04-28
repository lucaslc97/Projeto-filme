import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/index'
import Header from './components/header/index'

import Erro from './Pages/Erro/index'

import Filme from './Pages/Filme/index'



const Routes = () => {

    return (

        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/filme/:id' component={Filme}></Route>
                <Route path='*' component={Erro}></Route>
                
            </Switch>
        </BrowserRouter>


    )

}

export default Routes