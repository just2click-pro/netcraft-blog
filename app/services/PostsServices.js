let comLayer = require("./JQueryWrapper");
let _ = require('lodash');

class PostsService {
	constructor () {
		this.url = '../data/';
		this.posts = this.getPosts(this.sortPosts);
		
	}

	sortPosts (posts) {
		return posts.sort ( (a, b) => {
			a = new Date(a.date);
			b = new Date(b.date);

			return ((a > b) ? -1 : (a < b) ? 1: 0);
		});
	}

	getPostsPage(page, postsPerPage = 3) {

		let numberOfPages = this.posts.length % postsPerPage + 1;
		let pagePosts = this.posts.filter( (post, index) => {
			for (let i = (page - 1); i < (page + postsPerPage); i++) {
				return (index === i);
			}
		});

		return pagePosts;
	}

	getPosts (callback) {
		comLayer.get(`${this.url}/posts.json`)
			.then ( (response) => {
				callback(response.posts);
			});
	}

	getHtmlPost(psot) {
		return comLayer.get(post.htmlPath);
	}

	getMdPost(post) {
		return comLayer.get(post.mdPost);
	}
}

module.exports = new PostsService();