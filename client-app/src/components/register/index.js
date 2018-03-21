import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './styles/main.css'
import api from '../../services/api'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            nameInput: '',
            usernameInput: '',
            passwordInput: '',
            passwordInput2: '',
            showError: false,
            showRegister: false
        }
    }

    keepInputName = (e) => {
        this.setState({ nameInput: e.target.value })

    }

    keepInputUsername = (e) => {
        this.setState({ usernameInput: e.target.value })

    }

    keepInputPassword = (e) => {
        this.setState({ passwordInput: e.target.value })

    }

    keepInputPassword2 = (e) => {
        this.setState({ passwordInput2: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { nameInput, usernameInput, passwordInput, passwordInput2 } = this.state

        if (passwordInput !== passwordInput2 && nameInput === "" && usernameInput === "" && passwordInput === "") {
            this.setState({ showError: true })

        } else {
            api.create(nameInput, usernameInput, passwordInput)
                .then(user => {

                    this.props.history.push(`/user`)
                })
        }
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()
        const { state: { usernameInput, passwordInput } } = this

        if (usernameInput === "" && passwordInput === "") {
            this.setState({ showError: true })


        } else {
            api.login(usernameInput, passwordInput)
                .then(user=> {
                        this.props.history.push(`/user`)
                })
        }
    }


    showRegister = (e) => {
        e.preventDefault()
        { !this.state.showRegister ? this.setState({ showRegister: true }) : this.setState({ showRegister: false }) }
    }

    render() {
        return (

            <div className="column-gray center-text centered-box column">
                <form id="register">
                    {(this.state.showRegister) ? <input type="text" name="name" id="name" placeholder="Name" className="personalized-input" onChange={this.keepInputName} value={this.state.nameInput} /> : ""}
                    <input type="text" name="username" id="username" placeholder="Username" className="personalized-input" onChange={this.keepInputUsername} value={this.state.usernameInput} />
                    <input type="password" name="password" id="password" placeholder="Password" className="personalized-input" onChange={this.keepInputPassword} value={this.state.passwordInput} />
                    {(this.state.showRegister) ? <input type="password" name="validatePassword" id="validatePassword" placeholder="Retype Password" className="personalized-input" onChange={this.keepInputPassword2} value={this.state.passwordInput2} /> : ""}
                    <br />
                    {(this.state.showRegister) ? <button value="register" type="submit" className="white-text button" onClick={this.handleSubmit}>{"Register"}</button> : ""}
                    {(!this.state.showRegister) ? <button value="login" type="submit" className="white-text button" onClick={this.handleSubmitLogin}>{"Login"}</button> : ""}
                    <button className="registered" onClick={this.showRegister}>{(!this.state.showRegister) ? "Not Registered?" : ""}</button>
                    <button className="logged" onClick={this.showRegister}>{(this.state.showRegister) ? "Log in?" : ""}</button>

                    <h6>{(this.state.showError) ? "Some fields required" : ""}</h6>

                </form>


            </div>

        );
    }
};

const RegisterWithRouter = withRouter(Register)
export default RegisterWithRouter


