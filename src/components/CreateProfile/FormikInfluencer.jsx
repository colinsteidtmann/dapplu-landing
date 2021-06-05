import React from "react";
// Components
import ImageInput from "./ImageInput";
// React-bootstrap imports
import Form from "react-bootstrap/Form";
// Other imports
import {Formik} from "formik";
import * as yup from "yup";


// Validation
const schema = yup.object().shape({
	profilePic: yup.mixed().test("fileSize", "File size too large. Must be less than 5 MB", value => value ? value.file.size <= (5 * 1e+6 /*5 MB*/) : true).required("A profile picture is required."),
	name:yup.string().max(40, "Invalid name. Must be less than 40 characters.").required("This is required"),
	youtubeName:yup.string().required("This is required"),
	youtubeLink:yup.string().url("YouTube link must be a valid URL").required("This is required"),
	email:yup.string().email().required("This is required"),
	pitch:yup.string().min(10, "minimum 10 characters").max(200, "Invalid. Must be less than 200 characters.").required("This is required"),
	lookingFor:yup.string().min(30, "minimum 30 characters").required("This is required"),
	about:yup.string().min(30, "minimum 30 characters").required("This is required"),
	contact:yup.string().min(10, "minimum 10 characters").required("This is required"),
});

export const FormikInfluencer = (props) => {
	const {loading, handleSubmit} = props;

	return (
		<Formik
			validationSchema={schema}
			onSubmit={values => handleSubmit(values)}
			initialValues={{
				profilePic: "",
				name:"",
				email:"",
				pitch:"",
				lookingFor:"",
				about:"",
				contact:"",
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

					<Form.Group controlId="ProfilePicInput">
						<ImageInput 
							name="profilePic" 
							className="col-6 col-sm-4 col-md-3 mx-auto mb-3" 
						/>
						<Form.Control.Feedback type="invalid" className="is-invalid" style={errors.profilePic && {"display":"block"}}>
						  {errors.profilePic}
						</Form.Control.Feedback>
					</Form.Group>

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
						<Form.Control.Feedback type="invalid">
						  {errors.name}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Put in the your name.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="YoutubeNameInput">
						<Form.Label>YouTube Channel Name</Form.Label>
						<Form.Control 
							type="text"
							name="youtubeName"
							value={values.youtubeName}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.youtubeName && !errors.youtubeName}
							isInvalid={touched.youtubeName && !!errors.youtubeName}
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.youtubeName}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Put in the your YouTube channel name.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="YoutubeLinkInput">
						<Form.Label>YouTube Channel Link</Form.Label>
						<Form.Control 
							type="text"
							name="youtubeLink"
							value={values.youtubeLink}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.youtubeLink && !errors.youtubeLink}
							isInvalid={touched.youtubeLink && !!errors.youtubeLink}
							placeholder="https://www.youtube.com/channel/example"
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.youtubeLink}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Put in the url to your YouTube channel.
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
							placeholder="example@brand.com"
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.email}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  This is the email for Dapplu to contact you.
						  It won't be visible to others.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="PitchInput">
						<Form.Label>Elevator Pitch</Form.Label>
						<Form.Control 
							as="textarea"
							rows={2}
							name="pitch"
							value={values.pitch}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.pitch && !errors.pitch}
							isInvalid={touched.pitch && !!errors.pitch}
							placeholder="My channel connects ..."
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.pitch}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Describe your YouTube channel in a short elevator pitch format.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="LookingForInput">
						<Form.Label>What You're Looking For</Form.Label>
						<Form.Control 
							as="textarea"
							rows={3}
							name="lookingFor"
							value={values.lookingFor}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.lookingFor && !errors.lookingFor}
							isInvalid={touched.lookingFor && !!errors.lookingFor}
							placeholder="I want brands who ..."
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.lookingFor}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Describe the type of brand, product, and relationship 
						  that you want.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="AboutInput">
						<Form.Label>About Your Channel</Form.Label>
						<Form.Control 
							as="textarea"
							rows={4}
							name="about"
							value={values.about}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.about && !errors.about}
							isInvalid={touched.about && !!errors.about}
							placeholder="My channel focuses on ..."
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.about}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  Describe the content on your channel, who your audience is,
						  and the community you've built.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3 text-start" controlId="ContactInput">
						<Form.Label>How Brands Can Contact You</Form.Label>
						<Form.Control 
							as="textarea"
							rows={4}
							name="contact"
							value={values.contact}
							onChange={handleChange}
							onBlur={handleBlur}
							isValid={touched.contact && !errors.contact}
							isInvalid={touched.contact && !!errors.contact}
							placeholder="Go to my website and ..."
						/>
						<Form.Control.Feedback type="invalid">
						  {errors.contact}
						</Form.Control.Feedback>
						<Form.Text className="text-muted">
						  This will be visible to others. Put in an email, phone number,
						  or directions to visit another site in order to contact you. 
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

export default FormikInfluencer;

