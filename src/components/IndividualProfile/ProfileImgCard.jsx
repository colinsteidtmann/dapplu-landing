export const ProfileImgCard = (props) => {
	const {profilePic} = props;
	return (
		<div className="card col-6 col-sm-4 col-md-3 mx-auto p-2">
			<img
			  id="profilePic"
			  src={profilePic}
			  className="card-img-top"
			  alt="..."
			  style={{ height: "30vh", objectFit: "cover" }}
			/>
		</div>
	);
};

export default ProfileImgCard;