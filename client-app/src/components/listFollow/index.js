import React, { Component } from 'react';
import './styles/main.css'


function ListFollow(props) {

    //  let {userdata: {username}} = props
    //  console.log(username)

    if (props.userdata)
        console.log(Object.keys(props.userdata))
        return (
            <header >
                
                {Object.keys(props.userdata).length > 0 ? props.userdata.map(username => {
                        return (
                            <div className="F_data">
                                {username.images ? username.images.map(image => {
                                        return (
                                            <div className="imagen">
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


export default ListFollow





/*
 {props.images ? props.images.map(image => {
                return (
                    <div className="imagen">
                    <p>{username.username}
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


            }) : undefined}

*/
