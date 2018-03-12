import React, { Component } from 'react'

import Jumbotron from '../jumbotron'
import ImageList from '../ImageList'

class User extends Component {

    render() {
        return (
            <div>
                
                <Jumbotron />
                <ImageList />
            </div>
        )
    }
}

export default User