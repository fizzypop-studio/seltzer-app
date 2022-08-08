import {
	Box,
	Button,
	Container,
	Link,
	TextInput,
	Typography,
} from 'components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import * as S from './Login.styles';

type LoginFormValues = {
	email: string;
	password: string;
};

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

const Login = () => {
	const { t } = useTranslation();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginFormValues>({ resolver: yupResolver(schema) });
	const onSubmit = (data: LoginFormValues) => console.log(data);

	return (
		<S.Wrapper>
			<Container className="container" maxWidth="sm">
				<Box className="login-box">
					<S.HeaderWrapper>
						<Typography variant="h4">{t('auth.login')}</Typography>
						<Typography variant="h6">
							{t('auth.loginSubtitle')}
						</Typography>
					</S.HeaderWrapper>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<TextInput
							name="email"
							control={control}
							label={t('auth.email.label')}
							error={!!errors.email}
							helperText={
								!!errors.email ? t('auth.email.required') : ''
							}
							required
						/>
						<TextInput
							name="password"
							control={control}
							label={t('auth.password.label')}
							error={!!errors.password}
							helperText={
								!!errors.password
									? t('auth.password.required')
									: ''
							}
							required
						/>
						<S.ForgotPasswordWrapper>
							<Link text={t('auth.forgotPassword')} href="#" />
						</S.ForgotPasswordWrapper>
						<Button text={t('auth.signIn')} type="submit" />
					</S.Form>
				</Box>
			</Container>
		</S.Wrapper>
	);
};

export default Login;
