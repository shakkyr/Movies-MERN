import axios from 'axios';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {SHOW_ERROR_MESSAGE,	SHOW_SUCCESS_MESSAGE,} from '../constants/messageConstants';
import {GET_MOVIE_BY_ID} from '../constants/singleMovieConstants';


const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const movieUrl = `${url}/movie`;



export const getMovieById = (movieId) => async dispatch =>{
    try {
        dispatch({ type: START_LOADING });
        
        const response = await axios.get(`${movieUrl}/${movieId}`, {
            params: {
                api_key: apiKey,
                language: 'en_US',
            }
        })
        console.log('response',response.data);
        dispatch({ type: STOP_LOADING });
        dispatch({type: SHOW_SUCCESS_MESSAGE, payload: response.status});
        dispatch({type: GET_MOVIE_BY_ID,payload:response.data});

    } catch (err) {
		console.log('getting movie by id api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err,
		});
	}
}