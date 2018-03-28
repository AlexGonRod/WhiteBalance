import React, { Component } from 'react'

import './styles/main.css'


class Jumbotron extends Component {
    render() {
        return (

           
                <div id="jumbotron" className="jumbotron jumbotron-fluid">
                    <div className="container-fluid">
                    <h1 className="display-4 text-left">{this.props.userdata.username}</h1>
                    <p className="text-left">Username: {this.props.userdata.name} | Followers: {this.props.userdata.following ?  this.props.userdata.following.length : 0} | Following: </p>
                    </div>
                </div>
            
        )
    }
}



export default Jumbotron













