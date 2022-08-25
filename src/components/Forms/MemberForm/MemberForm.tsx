import { Button, Stack, TextInput } from 'components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { EMAIL_REGEX } from 'helpers/regex';
import * as S from './MemberForm.styles';

type MemberFormProps = {
	handleCancel: () => void;
};

type MemberFormValues = {
	firstName: string;
	lastName: string;
	email: string;
	role: string;
};

export const MemberForm = ({ handleCancel }: MemberFormProps) => {
	const { t } = useTranslation();

	const schema = yup
		.object({
			firstName: yup.string().required(),
			lastName: yup.string().required(),
			email: yup
				.string()
				.matches(EMAIL_REGEX, t('auth.email.valid'))
				.required(t('auth.email.required')),
			role: yup.string().required(),
		})
		.required();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<MemberFormValues>({ resolver: yupResolver(schema) });

	const onSubmit = (data: MemberFormValues) => {
		console.log({ data });
	};

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 0, sm: 1.5 }}
			>
				<TextInput
					name="firstName"
					control={control}
					label={t('auth.firstName.label')}
					error={!!errors.firstName}
					helperText={
						!!errors.firstName ? t('auth.firstName.required') : ''
					}
					required
				/>
				<TextInput
					name="lastName"
					control={control}
					label={t('auth.lastName.label')}
					error={!!errors.lastName}
					helperText={
						!!errors.lastName ? t('auth.lastName.required') : ''
					}
					required
				/>
			</Stack>
			<TextInput
				name="email"
				control={control}
				label={t('auth.email.label')}
				error={!!errors.email}
				helperText={!!errors.email ? errors.email.message : ''}
				required
			/>
			<TextInput
				name="role"
				control={control}
				label={t('auth.role.label')}
				error={!!errors.role}
				helperText={!!errors.role ? t('auth.role.required') : ''}
				required
			/>
			<S.ActionWrapper>
				<Button variant="text" text="Cancel" onClick={handleCancel} />
				<Button
					text={t('pages.team.addMember')}
					type="submit"
					className="submit-button"
				/>
			</S.ActionWrapper>
		</S.Form>
	);
};
