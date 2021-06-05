import React from "react";
// Components
import {Accordian} from "#components";
// Other imports

export const FAQ = (props) => {
  return (
  	<>
  		<div className="row mx-auto py-5 col-12 col-lg-8 ">
  			<h1 className="text-center">FAQ</h1>
			<Accordian id="FAQAccordian" flush={true}>

				<Accordian.Item id="One">
					<Accordian.Header>
						What’s in it for the brand?
					</Accordian.Header>
					<Accordian.Body>
						You’ll never worry whether the content creator you hired 
						is making good content. You’ll be in full control of your 
						advertising spending. If you want to pay $0.03 per view 
						then you’re guaranteed to pay $0.03 per view. Simple.
					</Accordian.Body>
				</Accordian.Item>

				<Accordian.Item id="Two">
					<Accordian.Header>
						What’s in it for the content creator?
					</Accordian.Header>
					<Accordian.Body>
						You work hard to make your branded content. If it’s valuable 
						today when your audience is small, then why shouldn’t it be 
						valuable ten years from now when your audience is massive? So, 
						instead of getting paid a small fixed amount today, you should 
						set up a recurring revenue model that grows when your 
						audience grows. 
					</Accordian.Body>
				</Accordian.Item>

				<Accordian.Item id="Three">
					<Accordian.Header>
						Why is blockchain technology used?
					</Accordian.Header>
					<Accordian.Body>
						The blockchain guarantees trust and decentralization. It lets 
						Dapplu get accurate content engagement data that hasn’t been 
						tempered with, which then lets Dapplu automatically pay content 
					    creators. 
					</Accordian.Body>
				</Accordian.Item>

				<Accordian.Item id="Four">
					<Accordian.Header>
						What currencies are used?
					</Accordian.Header>
					<Accordian.Body>
						Brands create contracts using ethereum but they can choose to store 
						the contract’s funds in a number of “stablecoins” (cryptocurrencies 
						pegged to fiat currencies like the U.S. dollar), including Tether, 
						US Dollar Coin, and DAI. 
					</Accordian.Body>
				</Accordian.Item>

				<Accordian.Item id="Five">
					<Accordian.Header>
						Transaction fees and platform fees
					</Accordian.Header>
					<Accordian.Body>
						Creating a contract and withdrawing funds from it costs ethereum gas 
						(roughly $20 at the moment) and a 1% platform fee of the transacted 
						amount. 
					</Accordian.Body>
				</Accordian.Item>

			</Accordian>
  		</div>
  	</>
  );
};

export default FAQ;