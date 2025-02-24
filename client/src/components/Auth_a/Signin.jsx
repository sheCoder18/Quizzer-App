
import React from 'react';

export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSignIn = () => {
        const { email, password } = this.state;
        this.props.signIn(email, password);
    }

    render() {
        return ( 
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        <div>Email Address</div> 
                        <input
                            className="input"
                            type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-wrapper">
                      <div>Password</div> 
                      <input
                          className="input"
                          type="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value })}
                      />
                    </div>
            
                    <div className="btn" onClick={this.handleSignIn}>
                        Sign in
                    </div> 
                </div> 
            </div>
        )
    }
}
