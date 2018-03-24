import React from 'react'


function ImageItem(props) {
    return (
        <div className="card mb-3">
            <img className="card-img-top" src={props.imagedata.url} alt={props.imagedata._id} />
            <div className="card-body">
                <h5 className="card-title">{props.imagedata._id}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted" />Last updated 3 mins ago</p>
            </div>
        </div>
    )

}


export default ImageItem