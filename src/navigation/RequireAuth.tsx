import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReduxUser } from 'types/Redux';

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const user = useSelector((state: ReduxUser) => state.user.value);
	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
};
