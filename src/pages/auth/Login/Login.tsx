import {
	Box,
	Button,
	Container,
	Link,
	Stack,
	TextDivider,
	TextInput,
	Typography,
} from 'components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { Google, Apple, Facebook } from '@mui/icons-material';

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
			<S.HeaderWrapper>
				<S.LogoWrapper>
					<Typography variant="h5">SELTZER</Typography>
				</S.LogoWrapper>
				<S.HeaderActionWrapper>
					<Link
						text={t('auth.signUp')}
						href="/sign-up"
						className="sign-up-button"
					/>
					<Button
						text={t('auth.requestDemo')}
						className="request-button"
					/>
				</S.HeaderActionWrapper>
			</S.HeaderWrapper>
			<Container className="container" maxWidth="sm">
				<Box className="login-box">
					<S.BoxHeaderWrapper>
						<Typography variant="h4">{t('auth.login')}</Typography>
						<Typography variant="h6">
							{t('auth.loginSubtitle')}
						</Typography>
					</S.BoxHeaderWrapper>
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
							type="password"
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
							<Link
								text={t('auth.forgotPassword')}
								href="/forgot-password"
							/>
						</S.ForgotPasswordWrapper>
						<Button
							text={t('auth.signIn')}
							type="submit"
							fullWidth
						/>
					</S.Form>
					<TextDivider text={t('auth.signInWith')} />
					<S.ButtonWrapper>
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={2}
						>
							<Button
								text={t('auth.social.google')}
								variant="outlined"
								startIcon={<Google />}
								fullWidth
							/>
							<Button
								text={t('auth.social.apple')}
								variant="outlined"
								startIcon={<Apple />}
								fullWidth
							/>
							<Button
								text={t('auth.social.facebook')}
								variant="outlined"
								startIcon={<Facebook />}
								fullWidth
							/>
						</Stack>
					</S.ButtonWrapper>
					<S.BoxFooterWrapper>
						<Typography variant="body1">
							{t('auth.haveAccount')}
						</Typography>
						<Link text={t('auth.signUp')} href="/sign-up" />
					</S.BoxFooterWrapper>
				</Box>
				<S.FooterWrapper>
					<Typography variant="body1">
						{t('general.copyright')} |{' '}
						<Link text={t('general.privacyPolicy')} href="#" />
					</Typography>
				</S.FooterWrapper>
			</Container>
		</S.Wrapper>
	);
};

export default Login;
