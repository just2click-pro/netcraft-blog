import React from "react";

class FilterPosts extends React.Component {
	render () {
		return (
			<div className="well">
				<h3>Filter Posts</h3>
				<div className="list-group">
					filtering component goes here
				</div>
				<h4><small className="glyphicon glyphicon-tag"></small> Category</h4>
				<div className="list-group">
					filtering component by goes here
				</div>
				<h4><small className="glyphicon glyphicon-user"></small> Author</h4>
				<div className="list-group">
					filtering component by goes here
				</div>
				<h4><small className="glyphicon glyphicon-time"></small> Month</h4>
				<div className="list-group">
					filtering component by goes here
				</div>								
			</div>
		);
	}
}

export default FilterPosts;