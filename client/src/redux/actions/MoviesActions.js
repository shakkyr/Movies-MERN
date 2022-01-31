import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {SHOW_ERROR_MESSAGE,	SHOW_SUCCESS_MESSAGE,} from '../constants/messageConstants';
import {GET_NOW_PLAYING,GET_SEARCHED_MOVIES} from '../constants/moviesConstants';



const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const searchUrl = `${url}/search/movie`;


export const getMovies = () => async dispatch =>{
    try {
        dispatch({ type: START_LOADING });
        
        const response = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                sort_by:"popularity.desc" ,
                page: 1
            }
        })
        dispatch({ type: STOP_LOADING });
        dispatch({type: SHOW_SUCCESS_MESSAGE, payload: response.data.successMessage,});
        dispatch({type: GET_NOW_PLAYING,	payload: response.data.results,});

    } catch (err) {
		console.log('getting mow playing movies api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
}
export const getSearchedMovies = (searchFor) => async dispatch =>{
    try {
        console.log('searchFor',searchFor);
        dispatch({ type: START_LOADING });
        const response = await axios.get(searchUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                sort_by:"popularity.desc" ,
                query: searchFor,
                page: 1
            }
        });
        dispatch({ type: STOP_LOADING });
        dispatch({type: SHOW_SUCCESS_MESSAGE, payload: response.data.successMessage,});
        dispatch({type: GET_SEARCHED_MOVIES, payload: response.data.results,});
        
        console.log(response);
    } catch (err) {
		console.log('getting Searched movies api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
}