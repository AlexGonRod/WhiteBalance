import React from 'react'
import './styles/main.css'

class Login extends React.Component {
    render() {
        return (

            <div className="row">
                 <div className="column column-double">
                    <div className="row">
                        <div className="column-gray center-text centered-box column">
                            <form action="submit">
                                <input type="text" name="email" placeholder="user@email.com" className="personalized-input" />
                                <input type="password" name="pass" placeholder="password" className="personalized-input" />
                                <button value="login" type="button" className="white-text button">login</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login


