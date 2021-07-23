import React, { useState } from "react";
import { db } from "../Config/firebase";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div id='Login'>
                <section id="section-Login" class="no-bg">
                    <div class="container pt-2">
                        <div class="row row-space">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="text-center">
                                    <h2>Login</h2>
                                    <p>Hello! Welcome Back <br />You are just a step away from your dream job.</p>
                                    <div class="spacer-30"></div>
                                </div>
                            </div>
                        </div>
                        <form name="row row-space" class="row form-default">
                            <div class="col-lg-3">
                            </div>
                            <div class="col-lg-6">
                                <div class="row row-space">
                                    <div class="col-12">
                                        <div class="field-set">
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Enter Email" onChange={this.handleChange}
                                                value={this.state.email} />
                                            <div class="line-fx"></div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="field-set">
                                            <input type="password" name="password" id="password" class="form-control" placeholder="Enter Password" onChange={this.handleChange}
                                                value={this.state.password} />
                                            <div class="line-fx"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="spacer-single"></div>
                            <div class="col-md-12 text-center">
                                <div id="submit">
                                    <input type="login" onClick={this.login} value="Login" class="btn btn-custom color-2" />
                                </div>
                                <div id="mail_success" class="success">Your message has been sent successfully.</div>
                                <div id="mail_fail" class="error">Sorry, error occured this time sending your message.</div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}
export default Login;

