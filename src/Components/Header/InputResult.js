import React from 'react';
import Container from '../MainContainer/Container';


const InputResult = ({match}) => {

	return (
			<Container query={match.params.query}/>

		);
	}



export default InputResult;
