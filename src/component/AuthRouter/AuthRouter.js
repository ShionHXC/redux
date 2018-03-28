import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginData} from './../../redux/user.redux'
import { getCookie} from './../../util'
@withRouter
@connect(
    null,
    {loginData}
)
class AuthRouter extends Component {
   componentDidMount() {
        const pathname = this.props.location.pathname;
        const url = ["/login", "/register"]
        if(url.indexOf(pathname) > -1){ 
            // 登录注册页  不用获取用户信息 
            return null
        }
        if (!getCookie("userId")){
            this.props.history.push("/login")
        }
        axios.get("/user/info")
        .then(res => {
            if(res.status === 200){
                if(res.data.code === 0){
                    // 有登陆信息
                    this.props.loginData(res.data.data)
                }else {
                    this.props.history.push("/login")
                }
            }
        })
   }
    render() {
        return <div></div>
    }
}

export default AuthRouter;