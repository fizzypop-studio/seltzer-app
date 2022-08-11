import styled from '@emotion/styled';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-image: url('https://bit.ly/3JJHNlG');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: inherit;

		.login-box {
			background-color: #fff;
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

export const ButtonWrapper = styled.div`
	margin: 1.5rem 0;
`;

export const BoxFooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 1.5rem;

	a {
		margin-left: 0.25rem;
	}
`;
