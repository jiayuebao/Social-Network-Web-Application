import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';

export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn? 
            <Redirect to="/home" />:
            <Login handleLogin={this.props.handleLogin} />;
    }

    getHome = () => {
        return this.props.isLoggedIn ?
            <Home />:
            <Redirect to="/login" />;
    }
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" render={this.getLogin} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={this.getLogin} />
                    <Route path="/home" render={this.getHome} />
                    <Route render={this.getLogin} />
                </Switch>

                <Link to="/register">Register</Link><br/>
                <Link to="/login">Login</Link><br/>
                <Link to="/home">Home</Link>
            </div>
        );
    }
}