import { useState } from 'react';
import {
	Drawer,
	Helmet,
	MemberForm,
	Modal,
	PageHeader,
	Table,
} from 'components';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';

type Column = {
	id: 'name' | 'role' | 'email';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
};

type Data = {
	name: string;
	role: string;
	email: string;
};

export const Team = () => {
	const [showMemberModal, setShowMemberModal] = useState(false);
	const { t } = useTranslation();

	const columns: Column[] = [
		{ id: 'name', label: 'Name', minWidth: 170 },
		{ id: 'role', label: 'Role', minWidth: 100 },
		{ id: 'email', label: 'Email', minWidth: 150 },
	];

	const createData = (name: string, role: string, email: string): Data => {
		return { name, role, email };
	};

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

	const handleShowMemberModal = () => {
		setShowMemberModal(true);
	};

	const handleCloseMemberModal = () => {
		setShowMemberModal(false);
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
				actionClick={handleShowMemberModal}
				actionIcon={<Add />}
			/>
			<Table columns={columns} rows={rows} />
			<Modal
				open={showMemberModal}
				onClose={handleCloseMemberModal}
				title="Add Member"
				content="Fill out the form below to create a new team member"
				onRequestClose={handleCloseMemberModal}
			>
				<MemberForm handleCancel={handleCloseMemberModal} />
			</Modal>
		</Drawer>
	);
};
