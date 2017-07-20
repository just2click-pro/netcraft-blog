import React from "react";
import CounterHeader from './header/CounterHeader';

class Posts extends React.Component {
	render () {
		let posts = 9;
		return (
			<CounterHeader title={`Showing ${posts} Posts`} />
		);
	}
}

export default Posts;