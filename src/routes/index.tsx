import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar'
import Products from '../components/Products/Products'
import Cart from '../components/Cart/Cart'

const Root: React.FC = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route path='/products' exact component={Products} />
                    <Route path='/cart' exact component={Cart} />
                    <Redirect path='*' to='/products' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Root
