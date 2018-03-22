import React from 'react';
import './styles/main.css'


function ListFollow(props) {

    if (props.userdata)
        console.log(props.userdata)
        return (
            <header >
                {Object.keys(props.userdata).length > 0 ? props.userdata.map((username, index) => {
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

                        

                }) : undefined}
                
                
            </header>
        )
}


export default ListFollow


//{
    