import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './styles/main.css'
import api from '../../services/api'


class Register extends React.Component {
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

    handleSubmit() {
        const { nameInput, usernameInput, passwordInput, passwordInput2 } = this.state

        if (passwordInput !== passwordInput2 && nameInput === "" && usernameInput === "" && passwordInput === "") {
            api.create(nameInput, usernameInput, passwordInput)
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
                <form id="register">
                    <input type="text" name="name" id="name" placeholder="Name" className="personalized-input" onChange={this.keepInputName} value={this.state.nameInput}>{this.state.showRegister}<input />
                        <input type="text" name="username" id="username" placeholder="Username" className="personalized-input" onChange={this.keepInputUsername} value={this.state.usernameInput} />
                        <input type="password" name="password" id="password" placeholder="Password" className="personalized-input" onChange={this.keepInputPassword} value={this.state.passwordInput} />
                        <input type="password" name="validatePassword" id="validatePassword" placeholder="Retype Password" className="personalized-input" onChange={this.keepInputPassword2} value={this.state.passwordInput2} />
                        <br />
                        <button value="register" type="submit" className="white-text button"
                            onClick={e => { e.preventDefault(); this.handleSubmit() }}>{"Register"}</button>
                        <button value="login" type="submit" className="white-text button"
                            onClick={e => { e.preventDefault(); this.handleSubmit() }}>{"Login"}</button>
                        <h3>{(this.state.showError) ? "Some fields required" : ""}</h3>

                </form>


            </div>

                );
            }
        };
        
        export default Register
        
        
