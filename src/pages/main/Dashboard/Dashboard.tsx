import { DataCard, Drawer, Grid, Typography } from 'components';
import { useTheme } from '@mui/material/styles';
import {
	Person,
	QueryStats,
	ShoppingCart,
	BugReport,
} from '@mui/icons-material';

import { colors } from 'theme';
import * as S from './Dashboard.styles';

export const Dashboard = () => {
	const theme = useTheme();
	return (
		<Drawer currentRoute="/dashboard">
			<Typography variant="h5">Hello there!</Typography>
			<S.DataWrapper>
				<Grid
					container
					rowSpacing={{ xs: 1, sm: 2, md: 2 }}
					columnSpacing={{ xs: 1, sm: 2, md: 2 }}
				>
					<Grid item xs={12} sm={6} md={3}>
						<DataCard
							icon={<QueryStats />}
							data={10000}
							title="Weekly Sales"
							colors={[
								theme.palette.secondary.light,
								theme.palette.secondary.main,
							]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<DataCard
							icon={<Person />}
							data={175000}
							title="New Users"
							colors={[
								theme.palette.primary.light,
								theme.palette.primary.main,
							]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<DataCard
							icon={<ShoppingCart />}
							data={2000000}
							title="Item Orders"
							colors={[
								colors.tertiary.light,
								colors.tertiary.main,
							]}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<DataCard
							icon={<BugReport />}
							data={1000}
							title="Bug Reports"
							colors={[colors.green.light, colors.green.main]}
						/>
					</Grid>
				</Grid>
			</S.DataWrapper>
		</Drawer>
	);
};
