export const Footer = (props) => {
	return (
		<>
			<footer className="pt-5">
				<div className="container-fluid py-5 bg-dark text-white">
					<div className="row">
						<div className="col-4 col-lg-2 mb-3 me-auto">
							<p>Dapplu</p>
						</div>
						<div className="col-4 col-lg-2 mb-3 ms-auto">
							&copy; {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</footer>

		</>
	);
};

export default Footer;