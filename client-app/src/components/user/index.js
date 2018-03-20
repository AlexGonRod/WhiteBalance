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
        const id = this.props.match.params.idUser
        api.listUser(id, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhpdG8iLCJpYXQiOjE1MjE1NDEwMDMsImV4cCI6MTUyMTY5MTAwM30.KKcAvkp7z--ZNAmPW6sWv2g4-DdqweWQEk7SlmVhps4")
            .then(user => {
                this.setState({ user })
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