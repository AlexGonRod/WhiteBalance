import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../../services/api'
import Login from '../login'
import Following from '../following'
import User from '../user'
import Account from '../account'



class Home extends Component {
    constructor() {
        super()
        this.state = {
            users: {},
            following: {}
        }
    }

    componentWillMount() {
        api.listUser("5aad319e734d1d1b8288cc6f")
            .then(users => this.setState({ users }))

        // api.listFollowing("55aad319e734d1d1b8288cc6f")
        //     .then(following => this.setState({ following }))
     }

    render() {
        return (
            <div>
                {/* <Route exact path="/following" render={() => (
                    <Following following={this.state.following}/>
                )} />  */}
                <Route path="/login" render={() => (
                    <Login />
                )} />

                <Route path="/" render={() => (
                    <User users={this.state.users} />
                )} />

                <Route path="/account" render={() => (
                    <Account />
                )} />

            </div>

        );
    }
}



export default Home;