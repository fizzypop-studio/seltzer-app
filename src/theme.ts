import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#252627',
			contrastText: '#fff', //button text white instead of black
		},
		background: {
			default: '#FAF9F6',
		},
		secondary: {
			main: '#E16F7C',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
