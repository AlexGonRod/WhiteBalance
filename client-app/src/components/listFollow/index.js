import React,  {Component} from 'react';
import { withRouter } from 'react-router-dom'
import api from '../../api'
import './styles/main.css'


class ListFollow extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleComments = (imageId, userId) => {
        this.props.history.push(`/${imageId}/image/${userId}`)
    }

    handleLikes = (ownerId, imageId, id) => {
        this.setState({ check: !this.state.check })

        if (!this.state.check) {

            api.likeImage(ownerId, imageId, localStorage.getItem('token'))

        }
    }
   
    render() {
        return (
            < header >
                {(this.props.userdata).length > 0 ? this.props.userdata.map((username, index) => {
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


const FollowWithRouter = withRouter(ListFollow)
export default FollowWithRouter


    