

export const InfoCard = (props) => {
	const {children, icon, alt, title} = props;

	return (
		<div className="col-12 col-lg-4 mx-auto">
			<div className="card h-100">
				<img src={icon} alt={alt} className="card-img-top p-3" style={{height: "10rem"}} />
				<div className="card-body">
					<h5 className="card-title text-center">
						{title}
					</h5>
					<p className="card-text text-center">
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;