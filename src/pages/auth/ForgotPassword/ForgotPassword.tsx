import { useNavigate } from 'react-router-dom';
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

import * as S from './ForgotPassword.styles';

type ForgotPasswordFormValues = {
	email: string;
};

const schema = yup
	.object({
		email: yup.string().required(),
	})
	.required();

const ForgotPassword = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<ForgotPasswordFormValues>({ resolver: yupResolver(schema) });

	const onSubmit = (data: ForgotPasswordFormValues) => {
		console.log({ data });
		navigate('/login');
	};

	return (
		<S.Wrapper>
			<S.HeaderWrapper>
				<S.LogoWrapper>
					<Typography variant="h5">SELTZER</Typography>
				</S.LogoWrapper>
			</S.HeaderWrapper>
			<Container className="container" maxWidth="sm">
				<Box className="login-box">
					<S.BoxHeaderWrapper>
						<Typography variant="h4">
							{t('auth.forgotPassword')}
						</Typography>
						<Typography variant="subtitle1">
							{t('auth.forgotPasswordSubtitle')}
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
						<Button
							text={t('auth.resetPassword')}
							type="submit"
							className="submit-button"
							fullWidth
						/>
					</S.Form>
					<S.BoxFooterWrapper>
						<Typography variant="body1">
							{t('auth.havePassword')}
						</Typography>
						<Link text={t('auth.logIn')} href="/login" />
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

export default ForgotPassword;
