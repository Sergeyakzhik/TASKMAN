import { combineReducers } from 'redux';

import { boardReducer } from './app/board';

const rootReducer = combineReducers({
	board: boardReducer
});

export default rootReducer;