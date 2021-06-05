import {useState} from "react";
// api
import {sendContactForm} from "#api";

export const useContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [displayState, setDisplayState] = useState("form");

	const handleSubmit = async(inputs) => {
		setLoading(true);
		const response = await sendContactForm(inputs);
		if (response.status === 200) {
			setDisplayState("sent");
		} else {
			setDisplayState("error");
		}
		setLoading(false);
	}

	return {loading, handleSubmit, displayState, setDisplayState};
};

export default useContactForm;