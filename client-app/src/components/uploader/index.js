import React, { Component } from 'react'
import api from '../../services/api'
import firebase from 'firebase'
import swal from 'sweetalert2'
import './styles/main.css'
import { withRouter } from 'react-router-dom'

class Uploader extends Component {

    handleUpload = (event) => {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/images/${file.name}`)
        const task = storageRef.put(file)
            .then(result => {

                let image = result.downloadURL

                api.updateImage(image, localStorage.getItem('token'))
                    .then(image => {

                    })
            })
            .then((result) => 
            swal({
                title: 'Du llu guan tu uploa dis imach?',
                text: ":)",
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, upload  it!'

            }).then((result) => {
                swal(
                    'Upload completed!',
                    'Your file has uploaded.',
                    'success'
                )

            }
            )
        .then(this.props.history.push('/user'))
        )
        
            

    }


    render() {
        return (
            <div className=" p-y-1">
                <div className="row m-b-1">
                    <div className="col-sm-10 offset-sm-1">
                        <label className="label_image" >Add Image</label>
                        <div className="form-group inputDnD">
                            <label className="sr-only">File Upload</label>
                            <img width="350px" src={this.state.picture} alt="" />
                            <input type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*" onChange={this.handleUpload} data-title="Drag and drop a file" />

                        </div>

                    </div>
                </div>
            </div>

        )
    }

}

const UploadWithRouter = withRouter(Uploader)
export default UploadWithRouter




