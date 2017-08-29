import React from 'react';
import 'styles/header';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.pathName === '/filmList'){
            this.commentText.style.visibility = 'hidden'
        }
    }

    logOut(){
        this.props.logOut('');
    }
    
    render(){
        return (
            
            <div className="header">
                <div className="header__linkToFilmList" ref={(div) => this.commentText = div }><Link to={{ pathname: '/filmList' }}>Film list</Link></div>
                <div className="header__userName">User Name: {this.props.userName.login}</div>
                <div className="header__linkToLogOut"><Link onClick={this.logOut.bind(this)} to={{ pathname: '/' }}>Logout</Link></div>
            </div>
        );
    }
}

export default Header;