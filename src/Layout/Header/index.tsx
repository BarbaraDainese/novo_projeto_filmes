import React from 'react';
import { Container } from './styles';



const Header = (Props) => {
	return (

			<Container>
				{Props.children}
			</Container>

	);
}

export default Header;
