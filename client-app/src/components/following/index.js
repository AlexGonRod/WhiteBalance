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


    componentDidMount() {
        api.listFollowing(localStorage.getItem('token'))
            .then(following => { 
                
                this.setState({ following: following.data }) })
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