import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginWithRouter from '../login'
import RegisterWithRouter from '../register'
import User from '../user'
import ToFollowWithRouter from '../toFollow'
import FollowWithRouter from '../following'
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
                        <FollowWithRouter />
                    )} />

                    <Route path="/tofollow" render={() => (
                        <ToFollowWithRouter />
                    )} />

                    <Route path="/account" render={() => (
                        <Account />
                    )} />

                    <Route path="/upload" render={() => (
                        <UploadWithRouter />
                    )} />

                    <Route path="/:imageId/image/:ownerId" component={Image} 
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