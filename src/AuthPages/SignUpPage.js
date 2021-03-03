import React, { Component } from 'react';
import { signUp } from '../api-utils.js';

export default class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const user = await signUp(this.state.email, this.state.password);

        this.props.handleUserChange(user);
        this.props.history.push('/todos');
    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input value={this.state.email} onChange={this.handleEmail} />
                    </label>
                    <label>
                        Password:
                        <input value={this.state.password} onChange={this.handlePassword} />
                    </label>
                </form>
            </div>
        )
    }
}
