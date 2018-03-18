import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    borderRadius: '50%'

}

class Account extends Component {


    render() {
        return (
            <div className="row">
                <div className="column column-double">
                    <div className="row">
                        <div className="column-gray center-text centered-box column">
                            <img src="https://avatars1.githubusercontent.com/u/17208862?s=400&u=72c6d94475ddb162a882133db2f9ebcbf65b5fd3&v=4" style={style}/>
                            <form action="submit">
                                <h3>User account</h3>
                                <input type="text" name="name" placeholder="Name" className="personalized-input" />
                                <input type="text" name="username" placeholder="Username" className="personalized-input" />
                                <input type="password" name="password" placeholder="Password" className="personalized-input" />
                                <br/>
                                <button value="Update" type="button" className="white-text button"><NavLink className="nav-link" to="/account">Update</NavLink></button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Account