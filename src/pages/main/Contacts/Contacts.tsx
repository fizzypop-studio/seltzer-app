import { useState } from 'react';
import {
	Drawer,
	Helmet,
	ContactForm,
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

export const Contacts = () => {
	const [showContactModal, setShowContactModal] = useState(false);
	const { t } = useTranslation();

	const columns: Column[] = [
		{ id: 'name', label: 'Name', minWidth: 170 },
		{ id: 'role', label: 'Role', minWidth: 100 },
		{ id: 'email', label: 'Email', minWidth: 150 },
	];

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

	function handleShowContactModal() {
		setShowContactModal(true);
	}

	function handleCloseContactModal() {
		setShowContactModal(false);
	}

	return (
		<Drawer currentRoute="/dashboard/contatcs">
			<Helmet
				title={t('pages.contacts.title')}
				link="/dashboard/contacts"
				addPostfixTitle
			/>
			<PageHeader
				title={t('pages.contacts.title')}
				actionText={t('pages.contacts.addContact')}
				actionClick={handleShowContactModal}
				actionIcon={<Add />}
			/>
			<Table columns={columns} rows={rows} />
			<Modal
				open={showContactModal}
				onClose={handleCloseContactModal}
				title="Add Contact"
				content="Fill out the form below to create a new contact"
				onRequestClose={handleCloseContactModal}
			>
				<ContactForm handleCancel={handleCloseContactModal} />
			</Modal>
		</Drawer>
	);
};
