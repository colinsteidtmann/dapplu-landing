import React from "react";
// Components
import {ProfileGallery} from "#components";
// Other imports
import {influencers, brands} from "#constants";

export const Network = () => {
	return(
		<>
			<div className="container-fluid px-lg-5">

				<h1 className="text-center py-5">
					Connect with brands and content creators
					<span role="img" aria-label="handshakeEmoji">
						&#129309;
					</span>
				</h1>

				<ProfileGallery
					title="Content Creators"
					to="/network/influencers"
				>
					{					
						influencers.map((influencer, index) => {
							return <ProfileGallery.Card
								key={index}
								profilePic={influencer.profilePic}
								name={influencer.name}
								pitch={influencer.pitch}
								to={`/network/influencers/${index + 1}`}
							/>
						})
					}
				</ProfileGallery>

				<ProfileGallery
					title="Brands"
					to="/network/brands"
				>
					{					
						brands.map((brand, index) => {
							return <ProfileGallery.Card
								key={index}
								profilePic={brand.profilePic}
								name={brand.name}
								pitch={brand.pitch}
								to={`/network/brands/${index + 1}`}
							/>
						})
					}
				</ProfileGallery>

			</div>
		</>
	);
}

export default Network;