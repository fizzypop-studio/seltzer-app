import styled from '@emotion/styled';

type StyledTextDividerProps = {
	fullWidth?: boolean;
};

export const StyledTextDivider = styled.div<StyledTextDividerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	p {
		width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
		text-align: center;
		border-bottom: 1px solid #000;
		line-height: 0.1em;
		margin: 10px 0 20px;
	}

	p span {
		background: #fff;
		padding: 0 10px;
	}
`;
