import * as Yup from 'yup';

export default Yup.object().shape({
	username: Yup.string()
		.min(4, 'Too Short')
		.max(50 ,'Too Long')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email address')
		.max(50 ,'Too Long')
		.required('Required'),
	password: Yup.string()
		.min(4, 'Too Short')
		.max(50 ,'Too Long')
		.required('Required'),
	password2: Yup.string()
		.min(4, 'Too Short')
		.max(50 ,'Too Long')
		.required('Required')
		.test('password-match', 'Passwords do not match', function (value) {
			const { password } = this.parent;
			return password === value;
		}),
});
