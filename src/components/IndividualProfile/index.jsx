import React from "react";
import {useParams, useHistory} from "react-router-dom";
// Components
import {BackButton} from "#components";
import BrandInfo from "./BrandInfo";
import InfluencerInfo from "./InfluencerInfo";

export const IndividualProfile = (props) => {
  const {profileType} = props;
  const {id} = useParams();
  const history = useHistory();

  return (
  	<div className="container-fluid px-2 px-md-5 py-4">
  		<BackButton onClick={history.goBack} />

  		<div className="row my-5">
  			<div className="col-12 col-xl-9 col-xxl-7 mx-auto text-start">
  				{
  					profileType === "brand" ? 
  					<BrandInfo id={id} />
  					:
  					<InfluencerInfo id={id} />
  				}
  			</div>
  		</div>

    </div>
  );
};

export default IndividualProfile