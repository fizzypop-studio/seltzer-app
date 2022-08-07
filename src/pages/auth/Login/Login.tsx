import { Container } from 'components/Containers/Container';
import { Box } from 'components/Containers/Box';
import { Typography } from 'components/Typography';

import { useForm, Resolver } from 'react-hook-form';

import * as S from './Login.styles';

interface LoginFormProps {
	email: string;
	password: string;
}

const resolver: Resolver<LoginFormProps> = async (values) => {
	return {
		values: values.password ? values : {},
		errors: !values.password
			? {
					password: {
						type: 'required',
						message: 'Password is required',
					},
			  }
			: {},
	};
};

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>({ resolver });
	const onSubmit = (data: LoginFormProps) => console.log(data);

	return (
		<S.Wrapper>
			<Container className="container" maxWidth="sm">
				<Box className="login-box">
					<S.HeaderWrapper>
						<Typography variant="h4">Login</Typography>
						<Typography variant="subtitle1">Hey, Enter your details to sign in to your account</Typography>
					</S.HeaderWrapper>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<input defaultValue="test" {...register('email')} />

						<input {...register('password', { required: true })} />
						{errors.password && <span>Password is required</span>}

						<input type="submit" />
					</S.Form>
				</Box>
			</Container>
		</S.Wrapper>
	);
};

export default Login;
