import  Switch  from 'react-switch';
import React, { useContext } from 'react';

import Header from './Header';
import { ThemeContext } from 'styled-components';


type Props = {
	onChangeTheme: () => void;
}


// import { Container } from './styles';


const Layout = ({onChangeTheme}:Props) => {
	const {name, colors } = useContext(ThemeContext);

	return (
		<div>
			<Header>
				<h1>Prime Flix</h1>
				<Switch
					onChange={onChangeTheme}
					checked={name=="light"}
					height={20}
					width={40}
					checkedIcon={false}
					uncheckedIcon={false}
					handleDiameter={20}
					offColor={colors.secondary}
					onColor={colors.secondary}
				/>
			</Header>
		</div>



	);
}

export default Layout;
