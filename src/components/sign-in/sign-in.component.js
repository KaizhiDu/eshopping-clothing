import React, { Component } from 'react';
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase-utils-config";

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '123@qq.com',
            password: '456'
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type='email'
                        required
                        label='email'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name='password'
                        value={this.state.password}
                        type='password'
                        required
                        label='password'
                        handleChange={this.handleChange}
                    />
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;