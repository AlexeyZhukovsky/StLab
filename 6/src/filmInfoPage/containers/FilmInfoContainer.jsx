import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';

import Header from 'components/header';
import FilmInfo from 'filmInfoPage/components/filmInfo';
import Comments from 'filmInfoPage/components/comments';
import ScreenshotGallery from 'filmInfoPage/components/screenshotGallery';
import {addCommentAction, getImages} from 'filmInfoPage/actions/filmInfoPageActions';
import formatDate from 'helpers/formatDate';
import {setUser} from 'loginPage/actions/loginPageActions';

import 'filmInfoPage/styles/filmInfoContainer';

class FilmInfoContainer extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/'+this.props.filmId+'/images?api_key=ef67a2155c49b98d383b4d9bd03f78ae';
        this.props.getImages(url);
    }

    addComment(e){
        const commentItem = {
            id: this.props.filmId,
            comments:[{
                userName: this.props.currentUser.login,
                date: formatDate(new Date),
                commentText: this.commentText.value
            }]
        }
        if (this.commentText.value !== ''){
            this.props.onAddComment(commentItem)
        }else{
            alert("add comment text");
        }
        this.commentText.value = '';
    }

    ratingChanged(newRating){
        console.log(newRating)
    }

    render(){
        return(
            <div className="filmInfoContainer">
                <Header logOut={this.props.onLogOut} userName={this.props.currentUser}/>
                <FilmInfo film={this.props.film}/>
                <ReactStars
                        value ={3}
                        count={5}
                        onChange={this.ratingChanged.bind(this)}
                        size={24}
                        color1={'red'}
                        color2={'#ffd700'} 
                 />
                <ScreenshotGallery galery={this.props.film.backdrops}/>
                <div className="filmInfoContainer__comments">
                    <Comments d={this.props.com}/>
                    <div className="addComentBlock">
                        <textarea className="addComentBlock__textarea" rows="5" ref={(textarea) => this.commentText = textarea }></textarea>
                        <button className="addComentBlock__btn" onClick={this.addComment.bind(this)}>Add comment</button>
                    </div> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {    
    return { 
        filmId: ownProps.match.params.id,
        film: state.loginPageReducer.data[0].find(film => film.id === Number(ownProps.match.params.id)),
        com: state.filmInfoReducer.find(c => c.id == Number(ownProps.match.params.id)),
        currentUser: state.loginPageReducer.currentUser 
    }
};

const mapDispatchToProps = (dispatch) => ({
    onAddComment: (comment) => {
        dispatch(addCommentAction(comment));
    },
    onLogOut: (user) => {
        dispatch(setUser(user));
    },
    getImages: (url) => {
        dispatch(getImages(url));
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(FilmInfoContainer);