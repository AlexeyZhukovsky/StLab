import React from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {addData} from 'loginPage/actions/loginPageActions';
import {setUser} from 'loginPage/actions/loginPageActions';


class LoginFormContainer extends React.Component{
    constructor(props){
        super(props);
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
    
    render(){
        return(
            <form className = "loginForm" onSubmit={this.setUser.bind(this)}>
                <input className = "loginForm__getLogin" type="text" defaultValue="Alex"/>
                <input className = "loginForm__getPassword" type="password" defaultValue="111"/>
                <button className = "loginForm__btn" >Login</button>
            </form>
        );
    }

    setUser(e){
        e.preventDefault();
        console.log(this.props.testStore.loginPageReducer.data)
        const userInfo = {
            login: document.getElementsByClassName("loginForm__getLogin")[0].value,
            password: document.getElementsByClassName("loginForm__getPassword")[0].value
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

