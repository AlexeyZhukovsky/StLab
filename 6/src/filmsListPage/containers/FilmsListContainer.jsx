import React from 'react';
import Header from 'components/header';
import {connect} from 'react-redux';
import 'filmsListPage/styles/filmsListContainer';


import SearchFilm from 'filmsListPage/components/searchFilm';
import Films from 'filmsListPage/components/films';
import {search, getFilms} from 'filmsListPage/actions/filmListPageActions';
import {setUser} from 'loginPage/actions/loginPageActions';

class FilmsListContainer extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
    this.props.getFilms('https://api.themoviedb.org/3/list/1?api_key=ef67a2155c49b98d383b4d9bd03f78ae');
    }

    render(){
        return(
            <div className="filmsListContainer">
                {console.log(this.props)}
                <Header logOut={this.props.onLogOut} pathName={this.props.history.location.pathname} userName={this.props.currentUser}/>
                <div className="filmsListContainer__filmsList">
                    <SearchFilm dispatch = {this.props.search}/>
                    <Films d={this.props.films}/>  
                </div>
            </div>
        );
    }   
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.loginPageReducer.currentUser,
        films: state.films.filter(film => film.title.toLowerCase().includes(state.filmListReducer.toLowerCase()))
    }
};
const mapDispatchToProps = (dispatch) => ({
    search: (value) => {
        dispatch(search(value))
    },
    onLogOut: (user) => {
        dispatch(setUser(user));
    },
    getFilms: (url) => {dispatch(getFilms(url));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(FilmsListContainer);