import { Drawer, Typography } from 'components';
import * as S from './Team.styles';

export const Team = () => {
	return (
		<Drawer currentRoute="/dashboard/team">
			<Typography variant="h5">Team</Typography>
		</Drawer>
	);
};
