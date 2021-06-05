import {formStatuses} from "#constants";

export const MailErrorDisplay = (props) => {
	const {setDisplayState, title, body} = props;
	return (
		<div className="alert alert-dark">
			<h3 className="text-center mb-5">
			  <i className="fas fa-exclamation-circle text-danger pe-3"></i>
			  {title || "Uh oh! There was an error."}
			</h3>
			<h5 className="mb-5 text-center">
				{body || "Sorry. Try again maybe?"}
			</h5>
			<div className="text-center">
			  <button type="submit" className="btn btn-primary btn-lg" onClick={() => setDisplayState(formStatuses.FORM)}>
			    Try again
			  </button>
			</div>
		</div>
	);
};

export default MailErrorDisplay;