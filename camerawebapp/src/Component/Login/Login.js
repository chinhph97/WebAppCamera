import React, { Component } from 'react';
import axios from "axios";
import LoginForm from '../Login/LoginForm.js';
class Login extends Component {
    state ={
        repos:''
    }
    PostInfor=(e)=>{
        e.preventDefault();
        const name = e.target.elements.username.value.toString();
        const password = e.target.elements.password.value.toString();
        console.log(name);
        console.log(password);
        if(name,password){ 
            axios.post('https://ec2-54-255-174-217.ap-southeast-1.compute.amazonaws.com:5000/login',{username:name,password:password})
            .then((res)=>{
                console.log(res)
                const repos = res.data.message;
                this.setState({ repos });
                console.log(repos);
            }).catch(err=>{
                console.log(err.res);
            });
        }else return;
    }
    render() {
        return (
            <div>
                <LoginForm PostInfor={this.PostInfor}></LoginForm>
                <br></br>
                <h5>{this.state.repos}</h5>
            </div>
        );
    }
}

export default Login;