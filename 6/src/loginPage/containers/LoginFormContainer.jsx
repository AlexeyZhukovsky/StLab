import React from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {addData} from 'loginPage/actions/loginPageActions';
import {setUser} from 'loginPage/actions/loginPageActions';


class LoginFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: 'Alex', //убрать значения!!!
            password: '111'
        }
       
    }
   
    getLogin(e){
        this.setState({login: e.target.value});
    }

    getPassword(e){
        this.setState({password: e.target.value});
    }
    
    render(){
        return(
            <form className = "loginForm" onSubmit={this.setUser.bind(this)}>
                <input className = "loginForm__getLogin" onChange={this.getLogin.bind(this)} type="text" defaultValue="Alex"/>
                <input className = "loginForm__getPassword" onChange={this.getPassword.bind(this)} type="password" defaultValue="111"/>
                <button className = "loginForm__btn" >Login</button>
            </form>
        );
    }

    setUser(e){
        e.preventDefault();
        const userInfo = {
            login: this.state.login,
            password: this.state.password
        };
        if (this.props.testStore.loginUser.users.find(user => user.login == userInfo.login)){
            if(this.props.testStore.loginUser.users.find(user => user.password == userInfo.password)){
                this.props.onSetUser(userInfo);
            } else{
                 alert('Pass fall')
            }
        } else{
            alert('nety takogo')
        }
        if(this.props.testStore.loginUser.currentUser !== null){
            this.props.history.push({pathname: '/filmList'});
        }
    }
}

export default connect(
    (state, ownProps) => ({
        testStore: state,
        ownProps: ownProps
    }),
    dispatch => ({ 
        onSetUser: (user) =>{
            dispatch(setUser(user));
        }
    })
)(LoginFormContainer);

