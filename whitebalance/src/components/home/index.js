import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../../services/api'
import Login from '../login';
import Following from '../following';
import User from '../user';
import Account from '../account';



class Home extends Component {
    constructor() {
        super()
        this.state = {
            users:{}
        }
    }

componentWillMount() {
    api.list()
    .then(users => this.setState({users}))
}

    render() {
        return (

            <div>
                <Route exact path="/" render={() => (
                    <Following users={this.state.users}/>
                )} />
                <Route path="/login" render={() => (
                    <Login />
                )} />

                <Route path="/user" render={() => (
                    <User users={this.state.users}/>
                )} />

                <Route path="/account" render={() => (
                    <Account />
                )} />

            </div>

        );
    }
}



export default Home;