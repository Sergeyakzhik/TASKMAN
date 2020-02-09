import { Creators } from './actions';
import { Users } from '../../../api';

const requestUserAction = Creators.requestUser;
const receiveUserAction = Creators.receiveUser;

const getUser = () => async dispatch => {
	dispatch(requestUserAction());
	
	const token = localStorage.getItem('token');

	if (token) {
		try {
			const response = await Users.getUser(token);

			if (response.status !== 200) {
				return dispatch(receiveUserAction({}));
			}

			const result = await response.json();
		
			dispatch(receiveUserAction(result));
		} catch (err) {
			console.log(err);
		}
	} else {
		dispatch(receiveUserAction({}));
	}
};

export default {
	getUser
};