import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import App from './app/App';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';

import './index.css';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(middleware));

const muiTheme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				marginBottom: '10px',
				padding: '0 30px',
				boxShadow: '0 3px 4px -1px rgba(128, 128, 128, 0.3)',
				borderWidth: 2,
				borderRadius: '6px',
				backgroundColor: '#FFF',
				'&$focused $notchedOutline': {
					borderColor: '#10679E'
				},
				'&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
					borderColor: '#10679E'
				},
			},
			input: {
				
			},
			notchedOutline: {
				
			}
		},
		MuiDialog: {
			paper: {
				width: '600px',
				backgroundColor: '#E6F7FF'
			}
		},
		MuiDialogTitle: {
			root: {
				fontSize: '25px',
				textAlign: 'center',
				color: '#10679E',
				fontWeight: '900'
			}
		},
		MuiDialogContent: {
			root: {
				padding: '8px 10px'
			}
		},
		MuiButton: {
			root: {
				backgroundColor: '#10679E',
				'&:hover': {
					backgroundColor: '#6BA9D0',
				}
			},
			text: {
				color: '#E6F7FF'
			}
		},
		MuiFormControlLabel: {
			root: {
				marginRight: 0
			}
		}
	}
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
