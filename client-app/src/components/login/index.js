import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './styles/main.css'
import api from '../../services/api'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            usernameInput: '',
            passwordInput: '',
            showError: false
        }
    }

    keepInputUsername = (e) => {
        this.setState({ usernameInput: e.target.value })
    }

    keepInputPassword = (e) => {
        this.setState({ passwordInput: e.target.value })
    }

    handleSubmit() {
        const { usernameInput, passwordInput } = this.state

        if (usernameInput === '' || passwordInput === '') {
            api.login(usernameInput, passwordInput)
                .then(user => {
                    this.setState({ showError: false })

                    this.props.history.push(`/${user._id}`)
                })
        } else {
            this.setState({ showError: true })
        }
    }


    render() {
        return (
            <div className="column-gray center-text centered-box column">
                <form id="login">
                    <input type="text" name="username" id="username" placeholder="Username" className="personalized-input" onChange={this.keepInputUsername} value={this.state.usernameInput} />
                    <input type="password" name="password" id="password" placeholder="Password" className="personalized-input" onChange={this.keepInputPassword} value={this.state.passwordInput} />
                    <br />
                    <button value="login" type="submit" className="white-text button"
                        onClick={e => { e.preventDefault(); this.handleSubmit() }}>{"login"}</button>
                    <h3>{(this.state.showError) ? "Username or Password incorrect" : ""}</h3>


                </form>
            </div>
        )
    }
}


export default Login