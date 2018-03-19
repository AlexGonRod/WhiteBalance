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
        api.listFollowing("5aad319e734d1d1b8288cc6f")
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