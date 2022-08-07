import { User } from './User';

export interface ReduxUser {
	user: {
		value: User | null;
		status: string;
		error: string;
	};
}
