import styled from '@emotion/styled';
import { Button } from '@mui/material';

type StyledButtonProps = {
	fullWidth?: boolean;
};

export const StyledButton = styled(Button)<StyledButtonProps>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
	border-radius: 0.65rem;
`;
