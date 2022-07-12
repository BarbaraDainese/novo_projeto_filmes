import  Switch  from 'react-switch';
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
					height={20}
					width={40}
					checkedIcon={false}
					uncheckedIcon={false}
					handleDiameter={20}
					offColor="#fff"
					onColor="#232323"



				/>
			</Header>
		</div>



	);
}

export default Layout;
