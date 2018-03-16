import React, { Component } from 'react';
import './styles/main.css'



function ImageList(props) {
    console.log(props.images)
    return (
        <header>
            {props.images ? props.images.map(image => {
                return <div className="overlay">
                        <img src={image.image} alt="" />
                        <span>Text</span>
                    </div>
                }) : undefined}
        </header>
    )

}

export default ImageList

 
/*

                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt="" /></div>
                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt="" /></div>*/