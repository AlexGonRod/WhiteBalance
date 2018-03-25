import React, { Component } from 'react'
import api from '../../services/api'
import './styles/main.css'


class ToFollow extends Component {
    constructor(){
        super()

        this.state = {
            users: {}
        }
    }

    
    componentDidMount() {
        api.listUsers(localStorage.getItem('token'))
            .then(users => {
                console.log(users)
                this.setState({ users: users.data })
            })


    }

    render() {

        return (
            <header >
                {(this.state.users).length > 0 ? this.state.users.map((username, index) => {
                    return (
                        <div className="F_data" key={index}>
                            {username.images ? username.images.map((image, index) => {
                                return (
                                    <div className="imagen" key={index}>
                                        <p className="username">{username.username}</p>
                                        <img src={image.url} alt={image.url} key={image.url} />
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


export default ToFollow


//{
