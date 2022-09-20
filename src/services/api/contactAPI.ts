import axios from './axios';

const CONTACTS_URL = '/users/contacts';
const UPDATE_CONTACT_URL = '/users';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export async function getContacts(accessToken: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};
	return axios
		.get(CONTACTS_URL, config)
		.then((response: any) => {
			return response.data;
		})
		.catch((error: any) => {
			return error.response.data;
		});
}

export async function updateContactProfile(
	currentPassword: string,
	token: string | undefined,
	email?: string,
	password?: string
) {
	const data = {
		current_password: currentPassword,
		email,
		password,
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
	};
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return axios
		.patch(UPDATE_CONTACT_URL, data, config)
		.then((response: any) => {
			return response.data;
		})
		.catch((error: any) => {
			return error.response.data;
		});
}
