import {useState} from "react";
// Constants
import {formStatuses} from "#constants";

export const useApiForm = (apiFn) => {
	const [loading, setLoading] = useState(false);
	const [displayState, setDisplayState] = useState(formStatuses.FORM);

	const handleSubmit = async(inputs) => {
		setLoading(true);
		const response = await apiFn(inputs);
		if (response.status === 200) {
			setDisplayState(formStatuses.SENT);
		} else {
			setDisplayState(formStatuses.ERROR);
		}
		setLoading(false);
	}

	return {loading, handleSubmit, displayState, setDisplayState};
};

export default useApiForm;