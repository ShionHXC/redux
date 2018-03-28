import React, { Component } from 'react';
import {connect} from 'react-redux'
import Logo from './../../component/Logo/Logo'
import {List, InputItem, WhiteSpace, WingBlank, Button} from 'antd-mobile'
import {login} from './../../redux/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    {login}
)
class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            pwd: ""
        }
        this.register = this.register.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    register(){
        this.props.history.push("/register")
    }
    handleLogin(){
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <WingBlank>
                    <div style={{color: "#f05", marginLeft: 20}}>{this.props.msg}</div>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={v => this.handleChange("name", v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={v => this.handleChange("pwd", v)}
                            type="password"
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
                
            </div>
        );
    }
}

export default Login;