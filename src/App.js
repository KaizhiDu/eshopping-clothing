import React from 'react';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import { auth, createUserProfileDocument } from './firebase/firebase-utils-config';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => {
                        console.log(this.state);
                    });
                });
            } else {
                this.setState({currentUser: userAuth});
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='App'>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' component={SignInUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;