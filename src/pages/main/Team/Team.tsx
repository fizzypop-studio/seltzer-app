import { Drawer, Helmet, PageHeader, Table } from 'components';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';

export const Team = () => {
	const { t } = useTranslation();

	const handleAddMember = () => {
		console.log('Add Team Member');
	};

	type Column = {
		id: 'name' | 'role' | 'email';
		label: string;
		minWidth?: number;
		align?: 'right';
		format?: (value: number) => string;
	};

	const columns: Column[] = [
		{ id: 'name', label: 'Name', minWidth: 170 },
		{ id: 'role', label: 'Role', minWidth: 100 },
		{ id: 'email', label: 'Email', minWidth: 150 },
	];

	type Data = {
		name: string;
		role: string;
		email: string;
	};

	function createData(name: string, role: string, email: string): Data {
		return { name, role, email };
	}

	const rows = [
		createData(
			'Dwight Shrute',
			'Assistant to the Regional Manager',
			'dwight@email.com'
		),
		createData('Michael Scott', 'Regional Manager', 'michael@email.com'),
		createData('Jim Halpert', 'Sales', 'jim@email.com'),
		createData('Pam Halpert', 'Office Administrator', 'pam@email.com'),
		createData('Kevin Malone', 'Accounting', 'kevin@email.com'),
		createData('Cathy Simms', 'Sales', 'cathy@email.com'),
		createData('Erin Hannon', 'Secretary', 'erin@email.com'),
		createData('Andy Bernard', 'Sales', 'andy@email.com'),
		createData('Toby Flenderson', 'HR', 'toby@email.com'),
		createData('Angela Martin', 'Accounting', 'angela@email.com'),
		createData('Stanley Hudson', 'Sales', 'stanley@email.com'),
		createData('Ryan Howard', 'Temp', 'ryan@email.com'),
		createData('Oscar Martinez', 'Accounting', 'oscar@email.com'),
		createData('Creed Bratton', 'Unknown', 'creed@email.com'),
	];

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
			<Table columns={columns} rows={rows} />
		</Drawer>
	);
};
