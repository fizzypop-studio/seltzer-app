import styled from '@emotion/styled';

export const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	overflow: scroll;
	background-image: url('https://bit.ly/3JJHNlG');
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: inherit;
		padding-bottom: 2rem;

		.login-box {
			background-color: #fff;
		}
	}
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	padding: 0.75rem 4rem 1rem;

	@media (max-width: 768px) {
		padding: 0.75rem 1rem 1rem;
	}
`;

export const LogoWrapper = styled.div`
	color: #fff;
`;

export const HeaderActionWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 75%;

	.sign-up-button {
		color: #fff;
	}

	.request-button {
		width: 12rem;
		margin-left: 1rem;
	}

	@media (max-width: 768px) {
		.sign-up-button {
			display: none;
		}
	}
`;

export const BoxHeaderWrapper = styled.div`
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

export const FooterWrapper = styled.div`
	margin-top: 1rem;
`;
