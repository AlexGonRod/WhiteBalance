import React, { Component } from 'react'
import Jumbotron from '../jumbotron'
import ImageList from '../ImageList'

function User(props){
        return (
            <div>
                
                <Jumbotron />
                <ImageList users={props.users.data}/>
            </div>
        )
}

export default User