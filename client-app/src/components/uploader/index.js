import React, { Component } from 'react'
import firebase from 'firebase'
import './styles/main.css'


class Uploader extends Component {
    constructor() {
        super()

        this.state = {
            uploadValue: 0,
            picture: null
        }
    }

    handleUpload = (event) => {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/images/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransfered / snapshot.totalBytes) * 100

            this.setState({ uploadValue: percentage })
        },
            error => {
                console.log((error.message))
            },
            () => { this.setState({ uploadValue: 100, picture: task.snapshot.downloadURL }) }
        )
    }


    render() {
        return (
            <div className="container p-y-1" >
                <div className="row m-b-1">
                    <div className="col-sm-6 offset-sm-3">
                        <label type="button" className="btn btn-primary btn-block">Add Image</label>
                        <div className="form-group inputDnD">
                            <button className="sr-only">File Upload</button>
                            <progress value={this.state.uploadValue} max="100" />
                            <input type="file" className="form-control-file text-primary font-weight-bold" id="inputFile" accept="image/*" onChange={this.handleUpload} data-title="Drag and drop a file" />
                            <img width="320" src={this.state.picture} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Uploader


