import  Switch  from 'react-switch';
import React, { useContext } from 'react';

import Header from './Header';
import { ThemeContext } from 'styled-components';
import { Container, Content, LeftContent, RightContent } from './styles';


type Props = {
	onChangeTheme: () => void;
}





const Layout = ({onChangeTheme}:Props) => {
	const {name, colors } = useContext(ThemeContext);

	return (
		<div>
			<Container>
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
			<Content>
				<LeftContent/>
				<RightContent/>
			</Content>
			</Container>
		</div>



	);
}

export default Layout;
