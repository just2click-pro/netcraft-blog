import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  // Reducers go here
});

const state = {
    posts: {
        isLoading: false,
        postsList: [],
        selectedPost: {
        	title: '',
        	author: '',
        	date: new Date(),
        	tags: [],
        	mdPath: '',
        	htmlPath: '',
        	description: ''
        }
    }
};

const store = createStore(reducers);

export default store;
