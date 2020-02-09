import { combineReducers } from 'redux';

import { boardReducer } from './app/board';
import { userReducer } from './app/auth';

const rootReducer = combineReducers({
	board: boardReducer,
	user: userReducer
});

export default rootReducer;