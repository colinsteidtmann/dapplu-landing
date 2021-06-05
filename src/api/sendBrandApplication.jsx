import axios from "axios";
// Other imports
import {readUploadedFileAsUrl} from "#utils/FormFunctions";

export const sendBrandApplication = async(props) => {
	const {profilePic, name, email, pitch, lookingFor, about, contact} = props;
	const imgSrc = await readUploadedFileAsUrl(profilePic.file);	
	try {
		const response = await axios({
			method: "post",
			url: process.env.REACT_APP_TEST_API_URL + "sendBrandApplication",
			data: {
				profilePic: imgSrc,
				name: name,
				email: email,
				pitch: pitch,
				lookingFor: lookingFor,
				about: about,
				contact: contact,
			},
		});
		return response;
	} catch (err) {
		console.log(err);
		return err;
	}
}

export default sendBrandApplication;