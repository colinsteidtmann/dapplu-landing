import React from "react";
// components
import {Banner, ProblemSolution, FAQ, ContactForm} from "#components";

export const Home = () => {
	return(
		<>
			<div>
				<Banner />
				<ProblemSolution />
				<FAQ />
				<ContactForm />
			</div>
		</>
	);
}

export default Home;