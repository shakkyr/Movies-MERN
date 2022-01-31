import { GET_NOW_PLAYING } from "../constants/moviesConstants";
import { GET_SEARCHED_MOVIES } from "../constants/moviesConstants";

const INITIAL_STATE = {
  movieList: [],

};

const moviesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        movieList: [...action.payload],
      };
    case GET_SEARCHED_MOVIES:
      return {
        movieList: [...action.payload],
      };

    default:
      return state;
  }
};

export default moviesReducers;
