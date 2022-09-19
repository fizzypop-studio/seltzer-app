import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'redux/store';

export const RequireAuth: React.FC<{ children: any }> = ({ children }) => {
	const navigate = useNavigate();
	const loading = useSelector((state: RootState) => state.session.loading);
	const accessToken = useSelector(
		(state: RootState) => state.session.accessToken
	);

	useEffect(() => {
		if (!accessToken && !loading) {
			navigate('/login');
		}
	}, [navigate, accessToken, loading]);

	if (accessToken) {
		return children;
	} else if (loading) {
		return <p>Loading...</p>;
	} else {
		return <p>Something went wrong</p>;
	}
};
