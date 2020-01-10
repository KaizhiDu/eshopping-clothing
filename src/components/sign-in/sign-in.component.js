import React, { Component } from 'react';
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase-utils-config";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      email: '123@qq.com',
      password: '123456'
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;
    emailSignInStart(email, password);
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    const {googleSignInStart} = this.props;
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
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);