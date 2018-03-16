import React, { Component } from 'react'
import ImageList from '../ImageList'

class Following extends Component {

    render() {
        return (
            <div>

                <ImageList images={this.props.following.images} />
            </div>
        )
    }
}

export default Following