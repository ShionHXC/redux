import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { BrowserRouter, Route } from 'react-router-dom'
import reducers from './reducer'
import "./config"
import AuthRouter from './component/AuthRouter/AuthRouter'
import Login from './container/login/Login'
import Register from './container/register/Register'


const logger = createLogger();

const store = createStore(reducers, compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
function Boss(){
    return <div>Boss 页面</div>
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRouter></AuthRouter>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)


registerServiceWorker();
