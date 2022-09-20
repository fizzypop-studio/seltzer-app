import { useEffect, useState } from 'react';
import {
	Drawer,
	Helmet,
	ContactForm,
	Modal,
	PageHeader,
	Table,
	EmptyPlaceholder,
} from 'components';
import { useTranslation } from 'react-i18next';
import { Add, Group } from '@mui/icons-material';

import { useSelector, useDispatch } from 'react-redux';
import { getUserContacts } from 'redux/slices/contacts/contactSlice';
import { RootState } from 'redux/store';

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
	const accessToken = useSelector(
		(state: RootState) => state.session.accessToken
	);
	const userContacts = useSelector(
		(state: RootState) => state.contact.userContacts
	);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		dispatch(getUserContacts(accessToken || ''));
	}, [dispatch, accessToken]);

	const columns: Column[] = [
		{ id: 'name', label: 'Name', minWidth: 170 },
		{ id: 'role', label: 'Role', minWidth: 100 },
		{ id: 'email', label: 'Email', minWidth: 150 },
	];

	function createData(name: string, role: string, email: string): Data {
		return { name, role, email };
	}

	const rows =
		userContacts && userContacts.length > 0
			? userContacts.map((contact: any) =>
					createData(
						`${contact.first_name} ${contact.last_name}`,
						contact.role || '---',
						contact.email || '---'
					)
			  )
			: [];

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
			{userContacts?.length === 0 ? (
				<EmptyPlaceholder
					icon={<Group />}
					message={t('pages.contacts.empty')}
				/>
			) : (
				<Table columns={columns} rows={rows} />
			)}

			<Modal
				open={showContactModal}
				onClose={handleCloseContactModal}
				title="Add Contact"
				content="Fill out the form below to create a new contact"
				onRequestClose={handleCloseContactModal}
			>
				<ContactForm
					handleCloseModal={handleCloseContactModal}
					handleCancel={handleCloseContactModal}
				/>
			</Modal>
		</Drawer>
	);
};
