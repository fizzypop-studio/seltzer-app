import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			light: '#9C9C9C',
			main: '#252627',
			dark: '#000',
			contrastText: '#fff', //button text white instead of black
		},
		background: {
			default: '#FAF9F6',
		},
		secondary: {
			light: '#FFD0D5',
			main: '#E16F7C',
			dark: '#B25963',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
