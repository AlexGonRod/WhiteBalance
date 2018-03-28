import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'
import firebase from 'firebase'
import swal from 'sweetalert2'
import './styles/main.css'

class Image extends Component {
    constructor() {
        super()
        this.state = {
            image: {},
            commentInput: '',
            like: false
        }

    }

    submitComment = (e) => {
        e.preventDefault()
        const user = this.state.image.user
        const comment = this.state.commentInput
        const imageId = this.props.match.params.imageId

        api.commentImage(user, imageId, comment, localStorage.getItem('token'))
            .then(result => {
                console.log(result)
                window.location.reload();
            })
            .catch(() => alert('Ha habido un error'))
    }

    keepInputComment = (e) => {
        this.setState({ commentInput: e.target.value })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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

            <div className="row">

                <div className="card text-right w-75 h-75 col-xs-2 col-md-6">

                    <img className="card-img-top img-fluid" src={this.state.image.url} alt={this.state.image._id} />
                    <div className="card-body">
                        <div className="text2">
                            <p className="likes">
                                 
                                <span className="heart" onClick={(e) => { e.preventDefault(); this.handleLikes(this.state.image._id, this.state.image.user) }}>
                                    <i className="far fa-heart" ></i>
                                </span>
                                <span className="badge text-muted">{this.state.image.likes ? this.state.image.likes.length : 0}</span>
                                <i className="far fa-comment" ></i>
                                <span className="badge text-muted">{this.state.image.comments ? this.state.image.comments.length : 0}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2 col-md-6">
                    <form className="form-group text-left ">
                        <label>Send a message</label>
                        <textarea id="Messages" className="form-control" rows="3" onChange={this.keepInputComment} value={this.state.commentInput}></textarea>
                        <br />
                        <div className="form-group text-left">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-primary" onClick={this.submitComment}>Send</button>
                            </div>
                        </div>
                    </form>

                    <label className="card-title">Comments</label>
                    <div>
                        <ul className="list-group text-left">
                            {this.state.image.comments ? this.state.image.comments.map((comment, index) => {
                                console.log(comment)
                                return (
                                    <li className="list-group-item text-muted" key={index}>{comment.text}
                                        
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


const ImageWithRouter = withRouter(Image)
export default ImageWithRouter