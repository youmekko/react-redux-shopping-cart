import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import Products from './Products'
import Cart from './Cart'

function Class101App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/products' exact component={Products} />
                    <Route path='/cart' exact component={Cart} />
                    <Redirect path='*' to='/products' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Class101App
