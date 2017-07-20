import * as ACTIONS from './index';
import PostsService from '../services/PostsServices';

export function getPostsPage (page) {
	return dispatch => {
		({ type: ACTIONS.GET_POSTS_LIST_REQUEST });

		PostsService.getPosts ()
			.then ( posts => {
				return dispatch({ type: ACTIONS.GET_POSTS_LIST_RESPONSE, posts });
			});
	}
}
