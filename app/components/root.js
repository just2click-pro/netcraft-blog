import React from 'react';
import Content from './content/Content';
import PostsService from '../services/PostsService';

import Navigation from './navbar/navigation';

class Root extends React.Component {

	constructor () {
		super();

		this.posts = [];
	}

	componentDidMount() {
		this.posts = PostsService.getPosts();
	}

  render() {
    return (
    	<div className="container">
    		<Navigation />
    		<Content />
    	</div>
    )
  }
}

export default Root;
