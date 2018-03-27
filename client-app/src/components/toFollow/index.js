import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import api from '../../services/api'
import './styles/main.css'


class ToFollow extends Component {
    constructor(){
        super()

        this.state ={
            toFollow: []
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        api.listToFollow(localStorage.getItem('token'))
            .then(follow => {
                this.setState({ toFollow: follow.data })
            })
    }

    handleComments = (imageId, userId) => {
        this.props.history.push(`${imageId}/image/${userId}`)
    }

    render() {
            return (
                < header >
                    {this.state.toFollow.length > 0 ? this.state.toFollow.map((username, index) => {
                        return <div className="row" key={index}>
                            {(username.images.length) > 0 ? username.images.map((image, index) => {
                            
                                return (
                                    <div className="imagen col-xs-2 col-md-3" key={index}>
                                        <img src={image.url} alt={image.url} onClick={e => {
                                            e.preventDefault();
                                            this.handleComments(image._id, image.user)}} />
                                        <div className="comments">
                                            <div className="text">
                                                <p><small>{username.username}</small></p>
                                            </div>
                                            <div className="card-body">
                                                <div className="text2">
                                                    <p className="likes"><i className="far fa-heart"></i><span className="badge text-muted">{image.likes ? image.likes.length : 0}</span><i className="far fa-comment" ></i><span className="badge text-muted">{image.comments ? image.comments.length : 0}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                            }) : undefined
                        }
                        </div>
                        }).reverse() : undefined
                            
                            
                            
                    }
                 </header >
            )
    }
}


const ToFollowWithRouter = withRouter(ToFollow)
export default ToFollowWithRouter

