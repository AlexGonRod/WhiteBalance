import React,  {Component} from 'react';
import { withRouter } from 'react-router-dom'
import './styles/main.css'


class ListFollow extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleComments = (imageId, userId) => {
        this.props.history.push(`/${imageId}/image/${userId}`)
    }
   
    render() {
        return (
            < header >
                {(this.props.userdata).length > 0 ? this.props.userdata.map((username, index) => {
                    return <div className="wrapper" key={index}>
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
                                        <div className="text2">
                                            <p className="likes"><i className="far fa-heart"></i><i className="far fa-comment" ></i></p>
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


    