import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../api'
import './styles/main.css'


class ToFollow extends Component {
    constructor(){
        super()

        this.state ={
            toFollow: [],
            checkLikes: false
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

    handleLikes = (ownerId, imageId, id) => {
        this.setState({ check: !this.state.check })

        if (!this.state.check) {

            api.likeImage(ownerId, imageId, localStorage.getItem('token'))

        }
    }

    handleFollow = (ownerId) => {
        const token = localStorage.getItem('token')

        api.follow(ownerId, token).then((result) => {
            if (result.status === 'OK') {

                const follower = result.data.following.filter(follow => {
                    return follow = ownerId
                })
                this.setState({ image: follower })
            }
        })
    }

    render() {
            return (
                < header >
                {(this.state.toFollow).length > 0 ? this.state.toFollow.map((username, index) => {
                    return <div className="row" key={index}>
                        {username.images ? username.images.map((image, index) => {
                            return (
                                <div className="imagen" key={index}>
                                    <img src={image.url} alt={image.url} onClick={e => {
                                        e.preventDefault();
                                        this.handleComments(image._id, image.user)
                                    }} />
                                    <div className="comments">
                                        <div className="text">
                                            <p><small>{username.username}</small></p>
                                        </div>
                                        <small>
                                            <span className="follow" onClick={(e) => { e.preventDefault(); this.handleFollow(username._id) }}>Follow<span className="badge text-muted"></span></span>
                                        </small>
                                        <div className="card-body">
                                            <div className="text2">
                                                <p className="likes"><a className="heart" onClick={this.handleLikes}><i className="far fa-heart" ></i></a><span className="badge text-muted">{image.likes ? image.likes.length : 0}</span><i className="far fa-comment"></i><span className="badge text-muted">{image.comments ? image.comments.length : 0}</span></p>
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

