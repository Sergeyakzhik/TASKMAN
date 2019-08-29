import { combineReducers } from 'redux';

import { boardReducer } from './app/board';

const rootReducer = combineReducers({
	boardReducer
});

export default rootReducer;