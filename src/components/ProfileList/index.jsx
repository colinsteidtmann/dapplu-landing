import React from "react"
import {Link} from "react-router-dom";
// Components
import {BackButton, ProfileGallery} from "#components";
// Other imports
import {brands, influencers} from "#constants";

const TemplatePage = (props) => {
	const {children, title, createToUrl, createToText} = props;
	return (
		<div className="container-fluid px-3 px-md-5 py-4">
			<BackButton to="/network" />
			<h1 className="text-center">
				{title}
			</h1>
			<div className="row my-4 my-lg-0 justify-content-end">
				<Link to={createToUrl} className="btn btn-outline-primary w-fit">
					{createToText}
				</Link>
			</div>
			<div className="row gy-4 gx-4">
				{children}
			</div>
		</div>
	);
}

export const ProfileList = (props) => {
	const {userTypes} = props;

	return (
		<>	
			{
				userTypes === "brands" ? 
				<TemplatePage
					title={<>
							<span className="me-3">Explore the Brands</span>
							<span role="img" aria-label="earthEmoji">&#127757;</span>
						</>
					}
					createToUrl="/network/brands/create-brand"
					createToText="Add Your Brand"
				>
					{brands.map((brand, index) => (
					  <ProfileGallery.Card 
					  	key={index} 
					  	profilePic={brand.profilePic} 
					  	name={brand.name} 
					  	pitch={brand.pitch} 
					  	to={`/network/brands/${index + 1}`} />
					))}
				</TemplatePage>
				:
				<TemplatePage
					title={<>
							<span className="me-3">Meet The Influencers</span>
							<span role="img" aria-label="cameraEmoji">&#128248;</span>
						</>
					}
					createToUrl="/network/influencers/create-influencer"
					createToText="Add Yourself"
				>
					{influencers.map((influencers, index) => (
					  <ProfileGallery.Card 
					  	key={index} 
					  	profilePic={influencers.profilePic} 
					  	name={influencers.name} 
					  	pitch={influencers.pitch} 
					  	to={`/network/influencers/${index + 1}`} />
					))}
				</TemplatePage>
			}
		</>
	);
}

export default ProfileList;