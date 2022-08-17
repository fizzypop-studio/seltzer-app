import { Drawer, Typography } from 'components';
import * as S from './Account.styles';

export const Account = () => {
	return (
		<Drawer currentRoute="/dashboard/account">
			<Typography variant="h5">Account</Typography>
		</Drawer>
	);
};
