import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../../services/api'
import Register from '../register'
import Following from '../following'
import User from '../user'
import Account from '../account'



class Home extends Component {
    constructor() {
        super()
        this.state = {
            users: {}
        }
    }

    componentWillMount() {
        api.listUser("5aad319e734d1d1b8288cc6f")
            .then(users => this.setState({ users }))

     }

    render() {
        return (
            <div>

                <Route exact path="/" render={() => (
                    <User users={this.state.users} />
                )} />

                 <Route  path="/following" render={() => (
                    <Following />
                )} />  

                <Route path="/register" render={() => (
                    <Register />
                )} />
        
                <Route path="/account" render={() => (
                    <Account />
                )} />

            </div>

        );
    }
}



export default Home;