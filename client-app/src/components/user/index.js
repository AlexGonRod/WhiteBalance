import React, { Component } from 'react'
import Jumbotron from '../jumbotron'
import ImageList from '../ImageList'
import api from '../../services/api'

class User extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        api.listUser(localStorage.getItem('token'))
            .then(user => {

                this.setState({ user: user.data })
            })
        
            
    }


    render() {
        return (
            <div>
                <Jumbotron userdata={this.state.user} />
                <ImageList images={this.state.user.images} />
            </div >
        )
    }
}

export default User