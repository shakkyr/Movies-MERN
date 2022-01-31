import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from '../constants/favoriteConstants';

export const addToFavorite = movie => async dispatch => {
	// if favorite already exists in local storage, use it, otherwise set to empty array
	const favorite = localStorage.getItem('favorite')
		? JSON.parse(localStorage.getItem('favorite'))
		: [];

	// check if duplicates
	const duplicates = favorite.filter(favoriteMovie => favoriteMovie.id === movie.id);

	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep product data
		const movieToAdd = {
			...movie,
			count: 1,
		};

		// add movie data to favorite
		favorite.push(movieToAdd);

		// add favorite to local storage
		localStorage.setItem('favorite', JSON.stringify(favorite));

		// add favorite to redux
		dispatch({
			type: ADD_TO_FAVORITE,
			payload: favorite,
		});
	}
};

export const deleteFromFavorite = movie => async dispatch => {
	const favorite = localStorage.getItem('favorite')
		? JSON.parse(localStorage.getItem('favorite'))
		: [];

	const updatedFavorite = favorite.filter(favoriteMovie => favoriteMovie.id !== movie.id);

	localStorage.setItem('favorite', JSON.stringify(updatedFavorite));

	dispatch({
		type: DELETE_FROM_FAVORITE,
		payload: updatedFavorite,
	});
};