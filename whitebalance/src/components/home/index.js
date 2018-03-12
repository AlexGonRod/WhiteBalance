import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../login'
import Categories from '../categories'
import User from '../user'
import Account from '../account'



class Home extends Component {


    render() {
        return (

            <div>
                <Route exact path="/" render={() => (
                    <Categories />
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