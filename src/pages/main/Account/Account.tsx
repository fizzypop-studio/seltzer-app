import { Drawer, Helmet, Typography } from 'components';
import { useTranslation } from 'react-i18next';
import * as S from './Account.styles';

export const Account = () => {
	const { t } = useTranslation();

	return (
		<Drawer currentRoute="/dashboard/account">
			<Helmet
				title={t('pages.account.title')}
				link="/dashboard/account"
				addPostfixTitle
			/>
			<Typography variant="h5">Account</Typography>
		</Drawer>
	);
};
