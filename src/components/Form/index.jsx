
export const Form = (props) => {
	const {children, onSubmit} = props;

	return (
	);
}

export const Group = (props) => {
	const {children, className controlId} = props;

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
		  return React.cloneElement(child, { controlId: controlId });
		}
		return child;
	});

	return (
		<div className={className}>
			{childrenWithProps}
		</div>
	);
}


export const Control = (props) => {
	const {children, controlId, type, name, value, placeholder, onChange, onBlur, isValid, isInvalid} = props;

	return (
		<>
		  <label for={controlId} className="form-label">{name}</label>
		  <input 
		  	type={type || "text"} 
		  	className="form-control" 
		  	id={controlId} 
		  	placeholder={placeholder}
		  	value={value}
		  	onChange={onChange}
		  	onBlur={onBlur}
		  	isValid={isValid}
		  	isInvalid={isInvalid}
		  />
		</>
	);
}

export const Feedback = (props) => {
	const {children, type} = props;

	return (
		<div className={type === valid ? "valid-feedback" : "invalid-feedback" }>
		  {children}
		</div>
	);
}

Form.Group = Group;
Form.Control = Control;

export default Form;