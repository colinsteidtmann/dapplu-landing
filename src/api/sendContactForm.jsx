import axios from "axios";

export const sendContactForm = async(props) => {
	const {name, email, message} = props;
	try {
		const response = await axios({
			method: "post",
			url: process.env.REACT_APP_TEST_API_URL + "sendMail",
			data: {
				name: name,
				email: email,
				message: message
			},
		});
		return response;
	} catch (err) {
		console.log(err);
		return err;
	}
}

export default sendContactForm;