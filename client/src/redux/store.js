import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import favoriteReducer from './reducers/favoriteReducers';
import movieListReducer from './reducers/moviesReducers';
// import searchedMoviesReducers from './reducers/moviesReducers';

const reducer = combineReducers({
	loading: loadingReducer,
	messages: messageReducer,
	favorite: favoriteReducer,
	movieList : movieListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;