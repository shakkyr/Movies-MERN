import {GET_MOVIE_BY_ID} from '../constants/singleMovieConstants'


const INITIAL_STATE = {
    movieDetails: [],
  
  };

  const singleMovieReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_MOVIE_BY_ID:
        return {
            movieDetails: {...action.payload},
        };
  
      default:
        return state;
    }
  };
  
  export default singleMovieReducers;