import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../../services/api'
import Register from '../register'
import Login from '../login'
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
        api.listUser("5aad319e734d1d1b8288cc6f", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhpdG8iLCJpYXQiOjE1MjE1NDEwMDMsImV4cCI6MTUyMTY5MTAwM30.KKcAvkp7z--ZNAmPW6sWv2g4-DdqweWQEk7SlmVhps4")
            .then(users => this.setState({ users }))

    }

    render() {
        return (
            <div>

                <Route path="/:idUser" component={User} />

                <Route exact path="/" render={() => (
                    <Register />
                )} />

                <Route path="/following" render={() => (
                    <Following />
                )} />

                <Route path="/account" render={() => (
                    <Account />
                )} />


            </div>

        );
    }
}



export default Home;