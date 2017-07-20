import React from "react";

export default (props)=> {
    return (
    	<header>
    		<h2>
    			<a href={ props.postLink }>{ props.title }</a>
    		</h2>
    		<p>
    			<small className="glyphicon glyphicon-user"></small> by <a href={ props.postAuthor }>{ post.author }</a>
    		</p>
    		<p>
    			<small className="glyphicon glyphicon-time"></small> Posted on { props.postDate }
    		</p>
    	</header>
	)
}
