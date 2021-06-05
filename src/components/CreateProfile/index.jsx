import React from "react"
// Components
import {BackButton, MailSentDisplay, MailErrorDisplay} from "#components";
import FormikBrand from "./FormikBrand";
import FormikInfluencer from "./FormikInfluencer";
// Other imports
import {formStatuses} from "#constants";
import {sendBrandApplication, sendInfluencerApplication} from "#api";
import {useApiForm} from "#hooks";

const CreateProfile = (props) => {
	const {profileType} = props;
	const formAPI = (profileType === "brand" ? sendBrandApplication : sendInfluencerApplication);
	const {displayState, ...otherVars} = useApiForm(formAPI);
	
	return (
		<div className="container-fluid px-3 px-lg-5 py-4">

			<BackButton to={profileType === "brand" ? "/network/brands" : "/network/influencers"  }/>

			<div className="row my-5">
				<div className="col-12 col-lg-9 col-xxl-7 mx-auto">
					{
						(displayState === formStatuses.FORM) ?
							profileType === "brand" ? 
							<FormikBrand {...otherVars} />
							:
							<FormikInfluencer {...otherVars} />
						:
						(displayState === formStatuses.SENT) ?
							<MailSentDisplay 
								title="Success, we got your application!"
								body={
									<>
									A copy of your application has been sent to your email (check spam if it doesn't show).
									<br/> <br/>
									We'll review it and make a decision within 24 hours.
									If we approve you then you'll appear on our website.  
									<br/> <br/>
									Reply to the email sent to you if you have any questions.
									</>
								}
								buttonText="Back to form"
								{...otherVars}
							/>
						: 
							<MailErrorDisplay 
								buttonText="Back to form"
								{...otherVars}
							/>
					}
				</div>
			</div>


		</div>
	);
}

export default CreateProfile;