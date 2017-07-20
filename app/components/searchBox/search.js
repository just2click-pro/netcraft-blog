import React from "react";

class SearchBox extends React.Component {
	render () {
		return (
			<div className="well">
				<h4>Search</h4>
				<form>
					<div className="input-group">
						<input type="search" name="search" className="form-control" />
						<span className="input-group-btn">
							<button className="btn btn-default" type="submit">
								<span className="glyphicon glyphicon-search"></span>
							</button>
						</span>
					</div>
				</form>
			</div>
		);		
	}
}

export default SearchBox;