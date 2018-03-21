import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import api from '../../services/api'
import RegisterWithRouter from '../register'
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


    render() {
        return (
            <div>

                <Route path="/user" component={User} />

                <Route exact path="/" render={() => (
                    <RegisterWithRouter />
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