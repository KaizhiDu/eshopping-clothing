import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
