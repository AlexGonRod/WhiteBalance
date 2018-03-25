import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

import './styles/main.css'


class ImageList extends Component {
    handleComments = (id) => {
        this.props.history.push(`/image/${id}`)
    }

   render(){
       
    return (
        <header>

            {this.props.images ? this.props.images.map((image,index) => {
                return <div className="imagen" key={index}>
                    <img src={image.url} alt={image.url} onClick={e => {e.preventDefault();
                        this.handleComments(image._id)}} />

                    <div className="comments">
                        <div className="text">
                            <p><small>Last updated 3 mins ago</small></p>
                        </div>
                        <div className="text2">
                            <p className="likes"><i className="far fa-heart"></i><i className="far fa-comment" ></i></p>
                        </div>
                    </div>
                </div>


            }).reverse() : undefined}
        </header>


    )}

}


const ImageWithRouter = withRouter(ImageList)
export default ImageWithRouter







