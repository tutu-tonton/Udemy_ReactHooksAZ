import React from 'react';

const nameTag = (props) => {
	if (!props.firstName && !props.lastName) {
		return (
			<div className="name">
				<h3>Invalid Name</h3>
			</div>
		);
	}

	return (
		<div className="name">
			<h3 style={props.style}> First Name: {props.firstName}</h3>
			<h3 style={props.style}> Last Name: {props.lastName}</h3>
			{props.firstName === 'john' && <div style={{ color: 'green' }}>VIP</div>}
		</div>
	);
};

export default nameTag;
