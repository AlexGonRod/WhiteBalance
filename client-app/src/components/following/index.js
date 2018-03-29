import React, { Component } from 'react'
import ListFollow from '../listFollow'
import api from '../../api'

class Following extends Component {
    constructor() {
        super()
        this.state = {
            following: []
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
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