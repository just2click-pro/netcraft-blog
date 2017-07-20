import { combineReducers } from 'redux';
import { 
	GET_POSTS_LIST_REQUEST, 
	GET_POSTS_LIST_RESPONSE,
	GET_POST_REQUEST,
	GET_POST_RESPONSE } from '../actions';

function postsListReducer (state = [], action) {
	switch (action.type) {
		case GET_POSTS_LIST_RESPONSE:
			return [...action.posts];
	}

	return state;
}

function isLoadingReducer (state = false, action) {
	switch (action.type) {
		case GET_POSTS_LIST_REQUEST:
			return true;
		case GET_POSTS_LIST_RESPONSE:
			return false;
	}

	return state;
}

export default combineReducers({
	postsList: postsListReducer,
	isLoading: isLoadingReducer
});