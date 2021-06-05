import React from "react";
import {Link} from "react-router-dom";

export const BackButton = (props) => {
  const {to, onClick} = props;
  return (
  	<div className="container-fluid row gx-0 gx-lg-auto">
	   	<Link to={to || ""}>
	      <button type="button" className="btn float-start" onClick={onClick}>
	        <i className="fas fa-chevron-left"></i> Back
	      </button>
	    </Link>
    </div>
  );
};

export default BackButton