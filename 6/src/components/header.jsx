import React from 'react';
import 'styles/header';
import {Link} from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.pathName === '/1'){
            this.commentText.style.visibility = 'hidden'
        }
    }

    logOut(){
        this.props.dispatch('');
    }
    
    render(){
        return (
            
            <div className="header">
                <div className="header__linkToFilmList" ref={(div) => this.commentText = div }><Link to={{ pathname: '/1' }}>Film list</Link></div>
                <div className="header__userName">User Name: {this.props.userName.login}</div>
                <div className="header__linkToLogOut"><Link onClick={this.logOut.bind(this)} to={{ pathname: '/' }}>Logout</Link></div>
            </div>
        );
    }
}

// const Header = ({pathName, userName}) => {
//     if(pathName === '/1'){
//         console.log(this);
//     }
//     return (
//         <div className="header">
//             {/* <Link to={{ pathname: '/' }}>Player #7</Link> */}

//             <div ref='aaa'><Link to={{ pathname: '/1' }}>Film list</Link></div>
//             <div>User Name: {userName.login}</div>
//             <div><Link to={{ pathname: '/' }}>Logout</Link></div>
//         </div>
//     );
// };

export default Header;