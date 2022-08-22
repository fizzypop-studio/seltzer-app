import {
	AreaChart,
	ChartCard,
	DataCard,
	Drawer,
	Grid,
	Helmet,
	PageWrapper,
	Typography,
} from 'components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import {
	Person,
	QueryStats,
	ShoppingCart,
	BugReport,
} from '@mui/icons-material';

import { useSelector } from 'react-redux';
import { ReduxUser } from 'types/Redux';

import { colors } from 'theme';
import * as S from './Dashboard.styles';

export const Dashboard = () => {
	const { value: user } = useSelector((state: ReduxUser) => state.user);
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Drawer currentRoute="/dashboard">
			<Helmet
				title={t('pages.dashboard.title')}
				link="/dashboard"
				addPostfixTitle
			/>
			<PageWrapper>
				<Typography variant="h5">{`${t('pages.dashboard.welcome')}, ${
					user?.firstName
				} ${user?.lastName}`}</Typography>
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
								title={t('pages.dashboard.weeklySales')}
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
								title={t('pages.dashboard.newUsers')}
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
								title={t('pages.dashboard.itemOrders')}
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
								title={t('pages.dashboard.bugReports')}
								colors={[colors.green.light, colors.green.main]}
							/>
						</Grid>
					</Grid>
				</S.DataWrapper>
				<S.ChartWrapper>
					<Grid
						container
						rowSpacing={{ xs: 1, sm: 2, md: 2 }}
						columnSpacing={{ xs: 1, sm: 2, md: 2 }}
					>
						<Grid item xs={12} sm={12} md={8}>
							<ChartCard
								title="Weekly Sales"
								subtitle="(+43%) from last year"
								chart={<AreaChart />}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<ChartCard
								title="Weekly Sales"
								subtitle="(+43%) from last year"
								chart={<AreaChart />}
							/>
						</Grid>
					</Grid>
				</S.ChartWrapper>
			</PageWrapper>
		</Drawer>
	);
};
