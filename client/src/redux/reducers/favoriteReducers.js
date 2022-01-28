import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from '../constants/favoriteConstants';

let INITIAL_STATE = {
	favorite: [],
};

if (localStorage.getItem('favorite')) {
	INITIAL_STATE.favorite = JSON.parse(localStorage.getItem('favorite'));
} else {
	INITIAL_STATE.favorite = [];
}

const favoriteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITE:
			return {
				favorite: [...action.payload],
			};
		case DELETE_FROM_FAVORITE:
			return {
				favorite: [...action.payload],
			};
		default:
			return state;
	}
};

export default favoriteReducer;