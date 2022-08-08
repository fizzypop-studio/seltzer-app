import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: inherit;

		.login-box {
			width: 100%;
		}
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 4rem;
	text-align: center;
	line-height: 1rem;

	h4 {
		margin-bottom: 1rem;
	}
`;

export const Form = styled.form`
	margin: 2rem 0;
`;

export const ForgotPasswordWrapper = styled.div`
	margin: 1rem 0 1.5rem;
`;
