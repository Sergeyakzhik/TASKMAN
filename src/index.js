import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { ThemeProvider } from '@material-ui/styles';

import App from './app/App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

import './index.css';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

const theme = {
	palette: {
		primary: '#13659C',
		secondary: '#E6F7FF'
	}
};

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
