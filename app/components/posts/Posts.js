import React from "react";
import CounterHeader from './header/CounterHeader';

export default class Posts extends React.Component {
	render () {
		let posts = 9;
		return (
			<CounterHeader title={`Showing ${posts} Posts`} />
		);
	}
}