import { Drawer, Helmet, PageHeader } from 'components';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import * as S from './Team.styles';

export const Team = () => {
	const { t } = useTranslation();

	const handleAddMember = () => {
		console.log('Add Team Member');
	};

	return (
		<Drawer currentRoute="/dashboard/team">
			<Helmet
				title={t('pages.team.title')}
				link="/dashboard/team"
				addPostfixTitle
			/>
			<PageHeader
				title={t('pages.team.title')}
				actionText={t('pages.team.addMember')}
				actionClick={handleAddMember}
				actionIcon={<Add />}
			/>
		</Drawer>
	);
};
