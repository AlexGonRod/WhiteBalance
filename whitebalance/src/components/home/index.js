import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../login'
import Following from '../following'
import User from '../user'
import Account from '../account'



class Home extends Component {


    render() {
        return (

            <div>
                <Route exact path="/" render={() => (
                    <Following />
                )} />
                <Route  path="/login" render={() => (
                    <Login />
                )} />

                <Route path="/user" render={() => (
                    <User />
                )} />

                <Route path="/account" render={() => (
                    <Account />
                )} />

            </div>

        )
    }
}



export default Home