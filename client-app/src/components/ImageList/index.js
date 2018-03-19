import React, { Component } from 'react';
import './styles/main.css'


function ImageList(props) {
    return (
        <header>

            {props.images ? props.images.map(image => {
                return <div className="imagen">
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


            }) : undefined}
        </header>


    )

}


export default ImageList







