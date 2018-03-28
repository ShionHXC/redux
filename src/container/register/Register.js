import React, { Component } from 'react';
import {connect} from 'react-redux'
import Logo from './../../component/Logo/Logo'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio } from 'antd-mobile'
import { register} from './../../redux/user.redux'
import {Redirect} from 'react-router-dom'
const RadioItem = Radio.RadioItem;
@connect(
    state => state.user,
    { register}
)
class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            pwd: "",
            repeatPwd: "",
            type: "genius"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handerRegister = this.handerRegister.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key] : val
        })
    }
    handerRegister(){
        this.props.register(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                    <p style={{color:'#f50',paddingLeft: 20}}>{this.props.msg ? this.props.msg : ""}</p>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={v => this.handleChange("name", v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange("pwd", v)}
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v => this.handleChange("repeatPwd", v)}
                        >确认密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.state.type === "genius"}
                        onClick={() => this.handleChange("type","genius")}
                    >天才</RadioItem>
                    <RadioItem 
                        checked={this.state.type === "boss"}
                        onClick={() => this.handleChange("type", "boss")}
                        >老板</RadioItem>
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handerRegister}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;