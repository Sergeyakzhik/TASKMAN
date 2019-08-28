import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './app/App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

import './index.css';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

const muiTheme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				padding: '0 30px',
				boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
				borderWidth: 2,
				'&$focused $notchedOutline': {
					borderColor: '#13659C'
				},
				'&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
					borderColor: '#13659C'
				},
			},
		},
	},
});

const theme = {
	...muiTheme
};

// 	primary: '#13659C',
// 	secondary: '#E6F7FF'

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
