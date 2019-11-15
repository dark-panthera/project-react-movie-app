import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,PREVIOUS_PAGE, NEXT_PAGE,RATE_MOVIE,SET_TOTAL,SORT_BY,GET_ALL_MOVIES } from './types';

import axios from "axios";

export const searchMovie = text => dispatch => {
    dispatch({
        type:SEARCH_MOVIE,
        payload: text
    });
}

export const fetchMovie = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API}`)
    .then(data => dispatch({
        type:FETCH_MOVIE,
        payload: data.data
    }))
    .catch(err => console.log(err));
};

export const fetchMovies = text => dispatch => {
     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=${text}`)
            .then(data => dispatch({
                type:FETCH_MOVIES,
                payload: data.data
            }))
            .then(data => dispatch({
                type:SET_TOTAL,
                payload: data.payload.total_results
            }))
            .catch(err => console.log(err));
};

export const getAllMovies = (sorting, pageNumer) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&certification_country=US&certification.lte=G&sort_by=${sorting}&page=${pageNumer}`)
           .then(data => dispatch({
               type:GET_ALL_MOVIES,
               payload: data.data
           }))
           .then(data => dispatch({
               type:SET_TOTAL,
               payload: data.payload.total_results
           }))
           .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}

export const nextPage = (pageNumber, text) => dispatch => {
    //console.log(`${pageNumber} new`)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=${text}&page=${pageNumber}`)
            .then(data => dispatch({
                type:NEXT_PAGE,
                payload: data.data
            }))
            .catch(err => console.log(err));
};

export const previousPage = (pageNumber, text) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=${text}&page=${pageNumber}`)
            .then(data => dispatch({
                type:PREVIOUS_PAGE,
                payload: data.data
            }))
            .catch(err => console.log(err));
};

export const rateMovie = (rate, id) => dispatch => {
    
    axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_API}`)
    .then(session => {
        //session.data https://api.themoviedb.org/3/movie/550/rating?api_key=939be648c60cb3df43265513d4d7027f&guest_session_id=67f54025a3c39c049720e3c8e9fac7d1
        axios.post(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_API}&guest_session_id=${session.data.guest_session_id}`,{"value": rate})
            .then(data => dispatch({
                type:RATE_MOVIE
            }))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

export const sortBy = (sortby) => {
    return {
        type: SORT_BY,
        payload: sortby
    }
}