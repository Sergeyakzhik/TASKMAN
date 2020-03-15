import * as Yup from 'yup';

export default Yup.object().shape({
	username: Yup.string()
		.max(50 ,'Too Long')
		.required('Required'),
	password: Yup.string()
		.min(4, 'Too Short')
		.max(50 ,'Too Long')
		.required('Required')  
});