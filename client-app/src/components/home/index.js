import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginWithRouter from '../login'
import RegisterWithRouter from '../register'
import User from '../user'
import ToFollow from '../toFollow'
import Following from '../following'
import Account from '../account'
import UploadWithRouter from '../uploader'
import Image from '../image'

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
                <Switch>

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

                    <Route path="/tofollow" render={() => (
                        <ToFollow />
                    )} />

                    <Route path="/account" render={() => (
                        <Account />
                    )} />

                    <Route path="/upload" render={() => (
                        <UploadWithRouter />
                    )} />

                    <Route path="/image/:imageId" component={Image} 
                    />

                    <Route render={() => (
                        <LoginWithRouter />
                    )} />

                </Switch>
            </div>

        );
    }
}



export default Home;