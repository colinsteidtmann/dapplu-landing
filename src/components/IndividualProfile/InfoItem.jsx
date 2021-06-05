export const InfoItem = (props) => {
	const {label, description} = props;
	return (
		<div className="row mb-3">
			<label>{label}</label>
			<p className="text-secondary">{description}</p>
		</div>
	);
};

export default InfoItem;