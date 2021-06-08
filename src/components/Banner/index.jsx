import React from "react";
import { Link } from "react-router-dom";
// Assets
import {phone} from "#assets/gif";
// Components
// Other imports

export const Banner = (props) => {
  return (
  	<>
  		<div className="banner text-light ">
  			<div className="row px-4 px-lg-5">
  				<div className="col-12 col-lg-6 text-start mt-3 mt-lg-5">
  					<h1>
  						Influencer Marketing powered by blockchain
  					</h1>
  					<h5 className="my-5 my-lg-5">
  						Letting brands pay influencers and content creators in real-time for sponsored content and
  						embedded advertisements, instead of upfront lump sums paid based on historical content
  						engagement numbers.
  					</h5>

  					<div className="row my-3 my-lg-0">
  						<div className="col-6 col-lg-4">
  							<a href="https://app.dapplu.com/">
  							  <button className="btn btn-primary">Get Started</button>
  							</a>
  						</div>
  						<div className="col-6 col-lg-4">
  							<a href="#learn">
  							  <button className="btn btn-outline-secondary text-white-50">Learn more</button>
  							</a>
  						</div>
  					</div>

  				</div>
  				<div className="col-12 col-lg-6">
  					<img className="img-fluid" src={phone} alt="phoneGif" />
  				</div>
  			</div>
	  		
	  		
  		</div>

  	</>
  );
};

export default Banner