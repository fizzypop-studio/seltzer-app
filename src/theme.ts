import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#443850',
			contrastText: '#fff', //button text white instead of black
		},
		background: {
			default: '#394764',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
