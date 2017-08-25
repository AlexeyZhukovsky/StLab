import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';

import Header from 'components/header';
import FilmInfo from 'filmInfoPage/components/filmInfo';
import Comments from 'filmInfoPage/components/comments';
import ScreenshotGallery from 'filmInfoPage/components/screenshotGallery';
import {addCommentAction, getImages, setFilmRating} from 'filmInfoPage/actions/filmInfoPageActions';
import formatDate from 'helpers/formatDate';
import {setUser} from 'loginPage/actions/loginPageActions';

import 'filmInfoPage/styles/filmInfoContainer';

class FilmInfoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentText: ''
        }
    }

    componentDidMount(){
        const url = 'https://api.themoviedb.org/3/movie/' + this.props.filmId + '/images?api_key=ef67a2155c49b98d383b4d9bd03f78ae';
        this.props.onGetImages(url);
        
    }

    addComment(e){
        const commentItem = {
            id: this.props.filmId,
            comments:[{
                userName: this.props.currentUser.login,
                date: formatDate(new Date),
                commentText: this.state.commentText
            }]
        }
        if (this.state.commentText !== ''){
            this.props.onAddComment(commentItem)
        }else{
            alert("add comment text");
        }
        this.setState({commentText: ''});
    }

    getCommentText(e){
       this.setState({commentText: e.target.value}) 
    }

    ratingChanged(newRating){
        const rating = {
            id: this.props.filmId,
            rating:[{
                userName: this.props.currentUser.login,
                stars: newRating
            }]
        }
        this.props.onSetFilmRating(rating);
    }

    setAverageRating(){
        let averageRating; 

        if(this.props.filmRating !== undefined){
            let starsArray = this.props.filmRating.rating.map(user => user.stars);
            let sumStars = starsArray.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
                })

            averageRating = sumStars / starsArray.length;      
        }else{
            averageRating = 0; 
        }

        return averageRating;
    }

    render(){
        return(
            <div className="filmInfoContainer">
                <Header logOut={this.props.onLogOut} userName={this.props.currentUser}/>
                <FilmInfo film={this.props.film}/>
                <ReactStars
                        value ={this.setAverageRating()}
                        count={5}
                        onChange={this.ratingChanged.bind(this)}
                        size={24}
                        color1={'red'}
                        color2={'#ffd700'} 
                 />
                <p>{this.setAverageRating()}</p>
                <ScreenshotGallery galery={this.props.filmImages}/>
                <div className="filmInfoContainer__comments">
                    <Comments d={this.props.com}/>
                    <div className="addComentBlock">
                        <textarea className="addComentBlock__textarea" rows="5" value={this.state.commentText}  onChange={this.getCommentText.bind(this)}></textarea>
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
        film: state.films.find(film => film.id === Number(ownProps.match.params.id)),
        filmImages: state.images,
        com: state.filmInfoReducer.find(c => c.id == Number(ownProps.match.params.id)),
        currentUser: state.loginPageReducer.currentUser,
        filmRating: state.setFilmRating.find(c => c.id == Number(ownProps.match.params.id))
    }
};

const mapDispatchToProps = (dispatch) => ({
    onAddComment: (comment) => {
        dispatch(addCommentAction(comment));
    },
    onLogOut: (user) => {
        dispatch(setUser(user));
    },
    onGetImages: (url) => {
        dispatch(getImages(url));
    },
    onSetFilmRating: (rating) => {
        dispatch(setFilmRating(rating));
    }

});

export default connect(mapStateToProps,mapDispatchToProps)(FilmInfoContainer);