import React from "react";


export const Accordian = (props) => {
	const {children, id, flush} = props;

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
		  return React.cloneElement(child, { accordianId: id });
		}
		return child;
	});

	return (
		<div className={`accordion ${flush && "accordion-flush"}` } id={id}>
			{childrenWithProps}
		</div>
	);
}

const Item = (props) => {
	const {children, id, accordianId} = props;
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
		  return React.cloneElement(child, { accordianId: accordianId, itemId: id });
		}
		return child;
	});

	return (
		<div className="accordion-item">
			{childrenWithProps}
		</div>
	);
}

const Header = (props) => {
	const {children, itemId} = props
	return (
		<h2 className="accordion-header" id={"heading" + itemId}>
		  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + itemId} aria-expanded="false" aria-controls={"collapse" + itemId}>
		    {children}
		  </button>
		</h2>
	);
}

const Body = (props) => {
	const {children, itemId, accordianId} = props
	return (
		<div id={"collapse" + itemId} className="accordion-collapse collapse" aria-labelledby={"heading" + itemId} data-bs-parent={"#" + accordianId}>
		  <div className="accordion-body">
		  	{children}
		  </div>
		</div>
	);
}

Accordian.Item = Item;
Accordian.Header = Header;
Accordian.Body = Body;

export default Accordian