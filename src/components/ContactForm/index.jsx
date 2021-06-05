import React from "react";
// Components
import FormikContact from "./FormikContact";
import {MailSentDisplay, MailErrorDisplay} from "#components";
// Hooks
import {useApiForm} from "#hooks";
// Other imports
import {formStatuses} from "#constants";
import {sendContactForm} from "#api";

export const ContactForm = (props) => {
  const {displayState, ...otherVars} = useApiForm(sendContactForm);
  return (
  	<>
  		<div className="row py-5">
  			<div className="col-11 col-lg-6 mx-auto">
  				<h3 className="text-center my-3">
  					Still have questions? Send us a message!
  				</h3>
          {
            (displayState === formStatuses.FORM) ? 
            <FormikContact {...otherVars} />
            :
            (displayState === formStatuses.SENT) ?

            <MailSentDisplay {...otherVars} />
            :
            <MailErrorDisplay {...otherVars} />
          }

  			</div>
  		</div>
  	</>
  );
};

export default ContactForm;