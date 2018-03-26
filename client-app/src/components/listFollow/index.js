import React,  {Component} from 'react';
import { withRouter } from 'react-router-dom'
import './styles/main.css'


class ListFollow extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleComments = (id) => {
        this.props.history.push(`/image/${id}`)
    }
   
render(){
    if (this.props.userdata)
        //console.log(props.userdata)
        return (
            <header >
                {(this.props.userdata).length > 0 ? this.props.userdata.map((username, index) => {
                    return (
                        <div className="F_data" key={index}>
                            {username.images ? username.images.map((image, index) => {
                                return (
                                    <div className="imagen" key={index}>
                                        <p className="username">{username.username}</p>
                                        <img src={image.url} alt={image.url} key={image.url} onClick={e => {e.preventDefault(); 
                                        this.handleComments(image._id)}} />
                                        <div className="comments">
                                            <div className="text">
                                                <p><small>Last updated 3 mins ago</small></p>
                                            </div>
                                            <div className="text2">
                                                <p className="likes"><i className="far fa-heart"></i>   <i className="far fa-comment"></i></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : undefined
                            }
                        </div>
                    )
                }) : undefined
                }
   
            </header>
        )
    }
}


const FollowWithRouter = withRouter(ListFollow)
export default FollowWithRouter


    