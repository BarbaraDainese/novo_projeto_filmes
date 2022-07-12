import "styled-components";

declare module "styled-components"{
	export interface DefaultTheme{
		name: string;
		colors:{
			primary: string;
			secondary: string;
			lightGray: string;
			backgroundColor: string;
			textColor: string;
		}
	}
}
