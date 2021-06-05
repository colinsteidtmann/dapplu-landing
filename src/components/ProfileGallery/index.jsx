import {Link} from "react-router-dom";

export const ProfileGallery = (props) => {
	const {children, title, to} = props;
	return (
		<div className="row justify-content-center justify-content-md-start mt-3">
			<div className="col-8">
				<h3 className="text-start">
					{title}
				</h3>
			</div>
			<div className="col-4 text-end">
				<Link to={to} className="btn">
					<span className="me-2">View all</span> 
					<i className="fas fa-chevron-right"></i>
				</Link>
			</div>
			<div className="row">
				{children}
			</div>
		</div>
	);
};

export const Card = (props) => {
	const {profilePic, name, pitch, to} = props;
	return (
		<div className="col-12 col-sm-6 col-lg-4 col-xl-3 gy-3">
			<div className="card">
				<img 
					src={profilePic}
					alt="profilePic"
					className="card-img-top"
					style={{ height: "30vh", objectFit: "cover" }}
				/>
				<div className="card-body text-start">
					<h5 className="card-title">
						{name}
					</h5>
					<p className="card-text">
						{pitch}
					</p>
					<Link className="stretched-link" to={to} />
				</div>
			</div>
		</div>
	);
}

ProfileGallery.Card = Card;

export default ProfileGallery;