import React, { Component } from 'react'
import ListFollow from '../listFollow'
import api from '../../services/api'

class Following extends Component {
    constructor() {
        super()
        this.state = {
            following: []
        }
    }


    componentWillMount() {
        api.listFollowing("5aad319e734d1d1b8288cc6f", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhpdG8iLCJpYXQiOjE1MjE1NDEwMDMsImV4cCI6MTUyMTY5MTAwM30.KKcAvkp7z--ZNAmPW6sWv2g4-DdqweWQEk7SlmVhps4")
            .then(following => { this.setState({ following }) })
    }

    render() {
        return (
            <div>
                <ListFollow userdata={this.state.following} />
            </div>
        )
    }



}

export default Following