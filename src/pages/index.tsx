import React, { Children, useState } from 'react';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import Layout from '../Layout';
import light from '../themes/light';
import dark from '../themes/dark';



const HomePage = () => {
	const [theme, setTheme] = useState(light);

	const onChangeTheme=()=>{
		setTheme(theme.name=='light'? dark :light);
	}

	return (
		<div>
			<ThemeProvider theme={theme}>
			<Layout onChangeTheme={onChangeTheme}/>
			<h1>Bem Vindo</h1>

			</ThemeProvider>
			</div>

	);
};

export default HomePage;
