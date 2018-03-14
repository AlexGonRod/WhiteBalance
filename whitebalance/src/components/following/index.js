import React, { Component } from 'react'
import ImageList from '../ImageList'

class Following extends Component {

    render() {
        return (
            <div>

                <ImageList users={this.props.users.data}/>
            </div>
        )
    }
}

export default Following