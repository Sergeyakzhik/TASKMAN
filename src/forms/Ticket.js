import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from '@material-ui/core/Button';

const TicketForm = () => (
	<Formik
		onSubmit={(values, actions) => {

		}}
		render={({ errors, status, touched, isSubmitting }) => (
			<Form>
				<Field type='text' name='title' component={TextField} />
				<Field type='text' name='description' component={TextField} />
				<Button type='submit'>
                    Submit
				</Button>
			</Form>
		)}
	/>
);

export default TicketForm;
