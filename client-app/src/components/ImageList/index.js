import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

import './styles/main.css'


class ImageList extends Component {
    handleComments = (imageId, userId) => {
        this.props.history.push(`/${imageId}/image/${userId}`)
    }

   render(){
       
    return (
        <header>

            {this.props.images ? this.props.images.map((image,index) => {
                return <div className="imagen col-xs-2 col-md-4" key={index}>
                    <img src={image.url} alt={image.url} onClick={e => {e.preventDefault();
                        this.handleComments(image._id, image.user)}} />

                    <div className="comments">
                        <div className="text">
                            <p><small> </small></p>
                        </div>
                        <div className="card-body">
                            <div className="text2">
                                <p className="likes"><i className="far fa-heart"></i><span className="badge text-muted">{image.likes ? image.likes.length : 0}</span><i className="far fa-comment" ></i><span className="badge text-muted">{image.comments ? image.comments.length : 0}</span></p>
                            </div>
                        </div>
                    </div>
                </div>


            }).reverse() : undefined}
        </header>


    )}

}


const ImageWithRouter = withRouter(ImageList)
export default ImageWithRouter







