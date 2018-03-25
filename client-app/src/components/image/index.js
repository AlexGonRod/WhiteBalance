import React, { Component } from 'react'
import api from '../../services/api'
import './styles/main.css'

class Image extends Component {
    constructor() {
        super()
        this.state = {
            image: {}
        }
    }

    componentDidMount() {
        const imageId = this.props.match.params.imageId
        const comments = this.state.image.comments
        if (imageId)
            api.getImage(imageId, localStorage.getItem('token'))
                .then(image => {
                    this.setState({ image: image.data })
                })

        api.comment(imageId, comments, localStorage.getItem('token'))
                .then((comments) => {

                })
    }

    render() {
        return (

            <div className="container">

                <div className="card text-left w-75 h-75">
                    <img className="card-img-top img-fluid" src={this.state.image.url} alt={this.state.image._id} />
                    <div className="card-body">
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                    <form  className="form-group text-left">
                        <label for="Textarea1" >Send a message</label>
                        <textarea id="Messages" class="form-control" id="Textarea1" rows="3"></textarea>
                        <br />
                        <div class="form-group">
                            <div class="col-sm-3">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </form>
                    
                    <label className="card-title">Comments</label>
                    <ul class="list-group list-group-flush">
                    {this.state.image.comments ? this.state.image.comments.map(comment => {
                        <li class="list-group-item">{comment.comments}</li>
                    
                    }):undefined
                }
                        
                    </ul>
                </div>
            </div>
        )
    }

}

export default Image

