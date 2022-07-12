import { Switch } from 'antd';
import React from 'react';

import Header from './Header';





// import { Container } from './styles';


const Layout = () => {
	return (
		<div>
			<Header>
				<h1>Prime Flix</h1>
				<Switch
					onChange={()=>{}}
					checked
					size='small'


				/>
			</Header>
		</div>



	);
}

export default Layout;
