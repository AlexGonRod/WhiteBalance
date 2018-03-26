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


    
     getElements = () =>{
         console.log(this.props.match.params.imageId)
        console.log(this.state.image.user)
         console.log(localStorage.getItem('token'))

         api.commentImage(this.state.image.user, this.props.match.params.imageId, this.state.commentInput, localStorage.getItem('token'))

    }

    keepInputComment = (e) => {
        this.setState({ commentInput: e.target.value })
        
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        const imageId = this.props.match.params.imageId
        if (imageId)
            api.getImage(imageId, localStorage.getItem('token'))
                .then(image => {
                    console.log(image)
                    this.setState({ image: image.data })
                })
            
    }


    render() {
        return (

            <div className="container">

                <div className="card text-left w-75 h-75">
                    
                    {/* <img className="card-img-top img-fluid" src={this.state.image.url} alt={this.state.image._id} /> */}
                    <div className="card-body">
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                    <form  className="form-group text-left">
                        <label for="Textarea1" >Send a message</label>
                        <textarea id="Messages" className="form-control" id="Textarea1" rows="3" onChange={this.keepInputComment} value={this.state.commentInput}></textarea>
                        <br />
                        <div className="form-group">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-primary" onClick={this.getElements}>Send</button>
                            </div>
                        </div>
                    </form>
                    
                    <label className="card-title">Comments</label>
                    <ul class="list-group list-group-flush">
                    {/* {this.state.image.comments ? this.state.image.comments.map(comment => { */}
                        {/* <li className="list-group-item">{comment.comments}</li> */}
                    
                    // }):undefined
                }
                        
                    </ul>
                </div>
            </div>
        )
    }

}

export default Image

