import React from "react";
// Components
// React-bootstrap imports
import Form from "react-bootstrap/Form";
// Other imports
import {Formik} from "formik";
import * as yup from "yup";


// Validation
const schema = yup.object().shape({
	name:yup.string(),
	email:yup.string().email().required("This is required"),
	message:yup.string().required("This is required"),
});

export const FormikContact = (props) => {
	const {loading, handleSubmit} = props;

	return (
		<Formik
			validationSchema={schema}
			onSubmit={values => handleSubmit(values)}
			initialValues={{
				name:"",
				email:"",
				message:"",
			}}
		>
			{({
				handleSubmit, 
				handleChange,
				handleBlur, 
				values,
				touched, 
				isValid, 
				errors,
				setFieldValue
			}) => (
				<Form noValidate onSubmit={handleSubmit} >

					<Form.Group className="mb-3 text-start" controlId="NameInput">
						<Form.Label>Your Name</Form.Label>
						<Form.Control 
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.name && !errors.name}
							isInvalid={touched.name && !!errors.name}
						/>
						<Form.Text className="text-muted">
						  (optional)
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="EmailInput">
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="text"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.email && !errors.email}
							isInvalid={touched.email && !!errors.email}
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.email}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Put in an email that Dapplu can contact you at.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="EmailInput">
						<Form.Label>Message</Form.Label>
						<Form.Control 
							as="textarea"
							rows={5}
							name="message"
							value={values.message}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.message && !errors.message}
							isInvalid={touched.message && !!errors.message}
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.message}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Write your message.
						</Form.Text>
					</Form.Group>

					<button type="submit" className="btn btn-primary btn-lg mt-5">
						{
							(loading) ?
							<> 
								<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								Wait...
							</>
							:
							<>
								Send
							</>
						}
					</button>

				</Form>
			)}
		</Formik>
	);
};

export default FormikContact;

