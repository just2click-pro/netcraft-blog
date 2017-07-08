import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

import App from "./app"

ReactDOM.render(
	<Provider store={ store }>
    		<App/>
    </Provider>,
    	document.querySelector("#root")
);
