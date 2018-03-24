import React, { Component } from 'react'
import api from '../../services/api'

class Image extends Component {
    constructor() {
        super()
        this.state = {
            image: {}
        }
    }

    componentDidMount() {
        if (this.props.match.params.imageId)
            api.getImage(this.props.match.params.imageId, localStorage.getItem('token'))
                .then(image => {
                    this.setState({ image: image.data })
                })
    }

    render() {
        return (
            <div className="card mb-3">
                <img className="card-img-top" src={this.state.image.url} alt={this.state.image._id} />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted" />Last updated 3 mins ago</p>
                </div>
            </div>

        )
    }

}

export default Image