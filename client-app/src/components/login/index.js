import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/main.css'


class Login extends React.Component {
    render() {
        return (

            <div className="row">
                <div className="column column-double">
                    <div className="row">
                        <div className="column-gray center-text centered-box column">
                            <form action="submit">
                                <input type="text" name="name" placeholder="Name" className="personalized-input" />
                                <input type="text" name="username" placeholder="Username" className="personalized-input" />
                                <input type="password" name="password" placeholder="Password" className="personalized-input" />
                                <br/>
                                <button value="login" type="button" className="white-text button"><NavLink className="nav-link" to="/">login</NavLink></button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login


