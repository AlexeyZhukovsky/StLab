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
    
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/list/1?api_key=ef67a2155c49b98d383b4d9bd03f78ae')
            .then( response => 
                response.json())
            .then((data) => {
                return data.items})
            .then(item => {
                item.map( (i) => {
                fetch('https://api.themoviedb.org/3/movie/'+i.id+'/images?api_key=ef67a2155c49b98d383b4d9bd03f78ae')
                    .then(response => 
                        response.json())
                    .then(val => i.backdrops = val.backdrops);
                })
                this.props.onSaveResult(item);
            })
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
        console.log(this.props.testStore.loginPageReducer.data)
        const userInfo = {
            login: this.state.login,
            password: this.state.password
        };
        if (this.props.testStore.loginPageReducer.users.find(user => user.login == userInfo.login)){
            if(this.props.testStore.loginPageReducer.users.find(user => user.password == userInfo.password)){
                this.props.onSetUser(userInfo);
            } else{
                 alert('Pass fall')
            }
        } else{
            alert('nety takogo')
        }
        if(this.props.testStore.loginPageReducer.currentUser !== null){
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
        onSaveResult: (data) => {
            dispatch(addData(data));
        },
        onSetUser: (user) =>{
            dispatch(setUser(user));
        }
    })
)(LoginFormContainer);

