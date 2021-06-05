import React from "react";
// Assets
import {selfie, solution} from "#assets/images";
import {create, approve, paid, deadline} from "#assets/svg";
// Components
import InfoCard from "./InfoCard";
// Other imports

const Problem = () => {
	return (
		<div className="row pt-0 pt-lg-5 " id="learn">
			<div className="col-12 col-lg-4">
				<img className="img-fluid p-5" src={selfie} alt="selfieImage" />
			</div>
			<div className="col-12 col-lg-8 text-start">
				<h1>
					The Problem 
				</h1>
				<p className="text-body">
					Sponsored content and embedded advertisements are everywhere. Think — tv shows, news articles,
					TikTok videos, Instagram posts, YouTube videos, Spotify podcasts, movies, sports games. They can
					be more valuable than Google AdSense because of the close relationships between the content
					creator and their audience.
					<br />
					<br />
					Today, brands pay content creators and influencers upfront lump sums based on their historical
					average viewership numbers.
					<br />
					<br />
					Yet, what if a content creator grows their audience tenfold over the coming years and the
					content that they partnered with a brand for got way more than expected view (or likes, clicks, etc) numbers? Or,
					what if the creator’s media was a dud and got way less than expected engagement?
					<br />
					<br />
					In either case, the written contract’s upfront lump sum pay didn’t match the value generated for the
					hardcoded embedded advertisements. If only sponsored content contracts could be more dynamic and
					brands could pay influencers and content creators in a smarter way …
				</p>
			</div>
		</div>
	);
}

const Solution = () => {
	return (
		<div className="row pt-3">
			<div className="col-12 col-lg-5 text-start mx-auto">
				<h1>
					Our Solution
				</h1>
				<p className="text-body">
					Dapplu lets brands make smart contracts with content creators. Only YouTube videos are supported
					at the moment. The smart contracts automatically pay the creator for their YouTube video views.
				</p>
			</div>
			<div className="col-8 col-lg-3 mx-auto">
				<img className="img-fluid" src={solution} alt="solutionImg" />
			</div>
		</div>
	);
}

const ExplanationCards = () => {
	return (
		<div className="row pt-3 gy-4 px-0 px-lg-auto">
			<h1 className="text-center">
				How it works
			</h1>

			<InfoCard
				icon={create}
				title="Create"
				alt="createSvg"
			>
				Brand create a digital contract. They set a deadline, pay 
				per view amount, budget, and can upload an optional legally 
				inding written agreement.
			</InfoCard>

			<InfoCard
				icon={approve}
				title="Approve"
				alt="approveSvg"
			>
				Content creators approve the contract by uploading their 
				YouTube video tag with the branded content.
			</InfoCard>

			<InfoCard
				icon={paid}
				title="Get Paid"
				alt="paidSvg"
			>
				The smart contracts automatically pay the creator for their 
				YouTube video views. The creator can't earn more than the 
				contract's budget amount.
			</InfoCard>

			<InfoCard
				icon={deadline}
				title="Deadline"
				alt="deadlineSvg"
			>
				When the contract's deadline comes, it stops automatically 
				updating itself and stops paying the content creator for new 
				video views. If the creator didn’t earn the contract’s full 
				budget amount, then the brand can with the remaining. 
			</InfoCard>

		</div>
	);
}

export const ProblemSolution = (props) => {
  return (
  	<>
  		<div className="row justify-content-center px-2 px-lg-5">
	  		<Problem />
	  		<Solution />
	  		<ExplanationCards />
  		</div>
  	</>
  );
};

export default ProblemSolution