
// Component imports
import InfoItem from "./InfoItem";
import ProfileImgCard from "./ProfileImgCard";
// Other Imports
import {influencers} from "#constants";

export const InfluencerInfo = (props) => {
	const {id} = props;
	const influencer = influencers[id - 1]; // ids start at 1 while indices start at 0
	const {profilePic, name, youtubeName, youtubeLink, pitch, lookingFor, about, contact} = influencer;
	
	return (
		<>
			<ProfileImgCard profilePic={profilePic} />
			<div className="div p-3">
			<InfoItem label="Name" description={name} />
			<hr />
			<InfoItem label="YouTube name" description={youtubeName} />
			<hr />
			<InfoItem 
				label="YouTube channel link" 
				description={
		            <a
			 		  target="_blank"
			 		  rel="noopener noreferrer"
			 		  href={youtubeLink}
			 		  className="link-primary"
			 		>
			 		  {youtubeLink} <i className="fas fa-external-link-alt"></i>
			 		</a>
				} 
			/>
			<hr />
			<InfoItem label="Pitch to brands" description={pitch} />
			<hr />
			<InfoItem label="Who they're looking for" description={lookingFor} />
			<hr />
			<InfoItem label="About their channel" description={about} />
			<hr />
			<InfoItem label="How to contact them" description={contact} />
			</div>
		</> 
	);
};

export default InfluencerInfo;