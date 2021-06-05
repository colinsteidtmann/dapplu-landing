// Component imports
import InfoItem from "./InfoItem";
import ProfileImgCard from "./ProfileImgCard";
// Other Imports
import {brands} from "#constants";

export const BrandInfo = (props) => {
	const {id} = props;
	const brand = brands[id - 1]; // ids start at 1 while indices start at 0
	const {profilePic, name, pitch, lookingFor, about, contact} = brand;
	
	return (
		<>
			<ProfileImgCard profilePic={profilePic} />
			<div className="div p-3">
				<InfoItem label="Brand Name" description={name} />
				<hr/>
				<InfoItem label="Pitch" description={pitch} />
				<hr/>
				<InfoItem label="Who they're looking for" description={lookingFor} />
				<hr/>
				<InfoItem label="About their company" description={about} />
				<hr/>
				<InfoItem label="How to contact them" description={contact} />
			</div>
		</> 
	);
};

export default BrandInfo;