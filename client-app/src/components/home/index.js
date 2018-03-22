import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import LoginWithRouter from '../login'
import RegisterWithRouter from '../register'
import Following from '../following'
import User from '../user'
import Account from '../account'
import Uploader from '../uploader'



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
                    <LoginWithRouter />
                )} />

                <Route path="/register" render={() => (
                    <RegisterWithRouter />
                )} />

                <Route path="/following" render={() => (
                    <Following />
                )} />

                <Route path="/account" render={() => (
                    <Account />
                )} />

                <Route path="/upload" render={() => (
                    <Uploader />
                )} />


            </div>

        );
    }
}



export default Home;