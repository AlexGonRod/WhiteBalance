import React, { Component } from 'react'
import api from '../../services/api'
import './styles/main.css'

class Image extends Component {
    constructor() {
        super()
        this.state = {
            image: {},
            commentInput: ''
        }
       
    }



   submitComment = (e) => {
        e.preventDefault()
        const user = this.state.image.user
        const comment = this.state.commentInput
        const imageId = this.props.match.params.imageId

        api.commentImage(user, imageId, comment, localStorage.getItem('token'))
        // window.location.reload();
    }

    keepInputComment = (e) => {
        this.setState({ commentInput: e.target.value })

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        console.log(this.state.image)
        const imageId = this.props.match.params.imageId
        const ownerId = this.props.match.params.ownerId

        if (imageId)
            api.getImage(imageId, ownerId, localStorage.getItem('token'))
                .then(image => {
                    this.setState({ image: image.data })
                })

    }


    render() {
        return (

            <div className="container">

                <div className="card text-left w-75 h-75">

                    <img className="card-img-top img-fluid" src={this.state.image.url} alt={this.state.image._id} />
                    <div className="card-body">
                        <div className="text2">
                            <p className="likes"><i className="far fa-heart"></i><span className="badge text-muted">{this.state.image.likes ? this.state.image.likes.length : 0}</span><i className="far fa-comment" ></i><span className="badge text-muted">{this.state.image.comments ? this.state.image.comments.length : 0}</span></p>
                        </div>
                    </div>
                    <form className="form-group text-left">
                        <label>Send a message</label>
                        <textarea id="Messages" className="form-control" rows="3" onChange={this.keepInputComment} value={this.state.commentInput}></textarea>
                        <br />
                        <div className="form-group">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-primary" onClick={this.submitComment}>Send</button>
                            </div>
                        </div>
                    </form>

                    <label className="card-title">Comments</label>
                            <div>
                                <ul className="list-group list-group-flush">
                    {this.state.image.comments ? this.state.image.comments.map((comment, index) => {
                        return (
                                    <li className="list-group-item text-muted" key={index}>{comment.text}
                                        <p><small>{this.state.image.user}</small></p>
                                    </li>
                        )
                    }) : undefined
                }
                </ul>
            </div>
                </div>
            </div>
        )
    }

}

export default Image

