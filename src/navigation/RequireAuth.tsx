import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RequireAuth: React.FC<{ children: any }> = ({ children }) => {
	const navigate = useNavigate();
	const accessToken = false;
	const loading = false;

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
