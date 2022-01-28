import { GET_NOW_PLAYING } from '../constants/moviesConstants';

const INITIAL_STATE = {
	nowPlaying: [],
};

const moviesReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_NOW_PLAYING:
			return {
				nowPlaying: [...action.payload],
			};

		default:
			return state;
	}
};

export default moviesReducers;