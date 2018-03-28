import axios from 'axios'
import { getRedirectPath } from './../util'
const REGISTER_SUCCESS = "REGISTER_SUCCESS"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_DATA = "LOGIN_DATA"
const ERR_MSG = "ERR_MSG"
const initState = {
    name: '',
    reapeatPwd: '',
    type: '',
    isAuth: false,
    msg: '',
    redirectTo: ''
}
export function user( state=initState, action){
    switch (action.type) {
        case REGISTER_SUCCESS:
        // 注册成功  根据type 和  avatar  跳转到相应页面
            return { ...state, ...action.data, msg: "", redirectTo: getRedirectPath(action.data), isAuth: true}
        case    LOGIN_SUCCESS:
            return { ...state, ...action.data, msg: "", redirectTo: getRedirectPath(action.data), isAuth: true }
        case LOGIN_DATA:
            return { ...state, ...action.data, isAuth: true}
        case ERR_MSG:
            return { ...state, msg: action.msg, isAuth: false }
        default:
            return state
    }
}

export function register({ name, pwd, repeatPwd, type}){
    if (!name || !pwd || !repeatPwd || !type){
        return { type: ERR_MSG, msg: "用户名和密码不能为空！"}
    }
    if (pwd !== repeatPwd){
        return { type: ERR_MSG, msg: "密码和确认密码必须相同" }
    }
    return dispatch => {
        axios.post("/user/register", { name, pwd, type})
            .then(res => {
                if(res.status === 200 && res.data.code === 0){
                    dispatch(registerSuccess({ name, pwd, type } ))
                }else{
                    dispatch({ type: ERR_MSG, msg: res.data.msg })
                }
            })
    }
}

function registerSuccess(data){
    return { type: REGISTER_SUCCESS, data}
}

export function login({ name, pwd }) {
    if (!name || !pwd ) {
        return { type: ERR_MSG, msg: "用户名和密码不能为空！" }
    }
    
    return dispatch => {
        axios.post("/user/login", { name, pwd })
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch({ type: ERR_MSG, msg: res.data.msg })
                }
            })
    }
}
function loginSuccess(data){
    return {type: LOGIN_SUCCESS, data}
}
// 登录信息
export function loginData(data){
    return {type: LOGIN_DATA, data}
}