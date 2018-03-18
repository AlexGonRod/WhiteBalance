import React, { Component } from 'react'
import Jumbotron from '../jumbotron'
import ImageList from '../ImageList'

function User(props){
        return (
            <div>
                
                <Jumbotron userdata={props.users} />
                <ImageList images={props.users.images}/>
            </div>
        )
}

export default User