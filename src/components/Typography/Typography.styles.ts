import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.primary.main};
`;
