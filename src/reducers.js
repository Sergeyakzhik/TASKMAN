import { combineReducers } from 'redux';

import { boardReducer } from './app/board';

const rootReducer = combineReducers({
	boardReducer: boardReducer
});

export default rootReducer;