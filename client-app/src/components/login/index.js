import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import firebase from 'firebase'

import './styles/main.css'
import api from '../../services/api'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            usernameInput: '',
            passwordInput: '',
            showError: false,
            showError2: false
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user: user })
        })
    }

    keepInputUsername = (e) => {
        this.setState({ usernameInput: e.target.value })
    }

    keepInputPassword = (e) => {
        this.setState({ passwordInput: e.target.value })
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()
        const { state: { usernameInput, passwordInput } } = this

        if (usernameInput === "" && passwordInput === "") {
            this.setState({ showError: true })


            } else {
                api.login(usernameInput, passwordInput)
                    .then(result => {
                        localStorage.setItem('token', result.data.token)

                        this.props.history.push('/user')
                    })
            }
        

    }

    render() {
        return (
            <div className="column-gray center-text centered-box column">
                <form id="login">
                    <input type="text" name="username" id="username" placeholder="Username" className="personalized-input" onChange={this.keepInputUsername} value={this.state.usernameInput} />
                    <input type="password" name="password" id="password" placeholder="Password" className="personalized-input" onChange={this.keepInputPassword} value={this.state.passwordInput} />
                    <br />
                    <button value="login" type="submit" className="white-text button" onClick={this.handleSubmitLogin}>{"Login"}</button>
                    <NavLink value="register" to="/register" className="white-text button">{"Register"}</NavLink>

        
                    <h3>{(this.state.showError2) ? "Some inputs required" : ""}</h3>


                </form>
            </div>
        )
    }
}

const LoginWithRouter = withRouter(Login)
export default LoginWithRouter