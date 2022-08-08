export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
};

export type ReduxUser = {
	user: null | string;
};
