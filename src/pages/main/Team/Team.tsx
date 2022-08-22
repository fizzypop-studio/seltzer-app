import { Drawer, Helmet, Typography } from 'components';
import { useTranslation } from 'react-i18next';
import * as S from './Team.styles';

export const Team = () => {
	const { t } = useTranslation();

	return (
		<Drawer currentRoute="/dashboard/team">
			<Helmet
				title={t('pages.team.title')}
				link="/dashboard/team"
				addPostfixTitle
			/>
			<Typography variant="h5">Team</Typography>
		</Drawer>
	);
};
