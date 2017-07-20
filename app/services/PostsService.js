let baseURL ='data/';

class PostsService {
	getPosts() {
		fetch(baseURL + 'posts.json')
			.then ((response, reject) => {
				if (response.ok) {
					return response.text();
				} else {
					return reject;
				}				
			})
			.then (data => {
				return (JSON.parse(data));
			})
			.catch (error => {
				console.log(`Something went wrong, ${error}`);
			});
	}

	getPost(url) {
		fetch(baseURL + 'posts.json')
			.then ((response, reject) => {
				if (response.ok) {
					return response.text();
				} else {
					return reject;
				}				
			})
			.then (data => {
				return (JSON.parse(data));
			})
			.catch (error => {
				console.log(`Something went wrong, ${error}`);
			});		
	}
}

export default new PostsService();