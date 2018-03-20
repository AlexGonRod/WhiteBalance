import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/main.css'
import api from '../../services/api'


class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            nameInput : '',
            usernameInput:'',
            passwordInput:''
        }
    }

keepInputName = (e) => { this.setState({nameValue : e.target.value})

}

keepInputUsername = (e) => { this.setState({usernameValue : e.target.value})

}

keepInputPassword = (e) => { this.setState({passwordValue : e.target.value})

}

handleSubmit(nameInput, usernameInput, passwordInput) {
        api.login(nameInput, usernameInput, passwordInput).then(res => console.log(res))
    
}

    render() {
        return (

            <div className="row">
                <div className="column column-double">
                    <div className="row">
                        <div className="column-gray center-text centered-box column">
                            <form id="login" action="/login" method="post">
                                <input type="text" name="name" id="name" placeholder="Name" className="personalized-input" onChange={this.keepInputName} value={this.state.nameInput} required/>
                                <input type="text" name="username" id="username" placeholder="Username" className="personalized-input" onChange={this.keepInputUsername} value={this.state.usernameInput} required/>
                                <input type="password" name="password" id="password" placeholder="Password" className="personalized-input" onChange={this.keepInputPassword} value={this.state.passwordInput} required/>
                                <br/>
                                <button value="login" type="submit" className="white-text button" onclick={(e) => { e.preventDefault(); this.handleSubmit(this.state.nameInput, this.state.usernameInput, this.state.passwordInput )}}><NavLink className="nav-link" to="/">Login</NavLink></button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Register


