import React from 'react';
import Content from './content/Content';

import Navigation from './navbar/navigation';

class Root extends React.Component {
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
