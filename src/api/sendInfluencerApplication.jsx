import axios from "axios";
import {readUploadedFileAsUrl} from "#utils/FormFunctions";

export const sendInfluencerApplication = async(props) => {
	const {profilePic, name, youtubeName, youtubeLink, email, pitch, lookingFor, about, contact} = props;
	const imgSrc = await readUploadedFileAsUrl(profilePic.file);	
	try {
		const response = await axios({
			method: "post",
			url: process.env.REACT_APP_TEST_API_URL + "sendInfluencerApplication",
			data: {
				profilePic: imgSrc,
				name: name,
				youtubeName: youtubeName,
				youtubeLink: youtubeLink,
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

export default sendInfluencerApplication;