import { Creators } from './actions';
import { Users } from '../../../api';

const {
	requestUser,
	receiveUser,
	requestSignUp,
	receiveSignUpSuccess,
	receiveSignUpError
} = Creators;

const signUp = data => async dispatch => {
	dispatch(requestSignUp());

	try {
		const response = await Users.signUp(data);
		const result = await response.json();

		console.log(result);

		if (result.token) {
			localStorage.setItem('token', result.token);
		}
	
		dispatch(receiveSignUpSuccess(result));
	} catch (err) {
		console.log(err);
		return dispatch(receiveSignUpError());
	}
};

const getUser = () => async dispatch => {
	dispatch(requestUser());
	
	const token = localStorage.getItem('token');

	if (token) {
		try {
			const response = await Users.getUser(token);

			if (response.status !== 200) {
				return dispatch(receiveUser(null));
			}

			const result = await response.json();
		
			dispatch(receiveUser(result));
		} catch (err) {
			console.log(err);
		}
	} else {
		dispatch(receiveUser(null));
	}
};

export default {
	signUp,
	getUser
};