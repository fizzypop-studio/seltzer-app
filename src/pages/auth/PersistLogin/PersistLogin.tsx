import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const PersistLogin = () => {
	const loading = false;
	const accessToken = false;
	const refreshToken = null;

	useEffect(() => {
		function verifyRefreshToken() {
			try {
				//dispatch(refershAccessToken(refreshToken))
				console.log('refreshing Access Token');
			} catch (error) {
				console.log('error refreshing access token');
			}
		}

		if (!accessToken) {
			verifyRefreshToken();
		}
	}, [accessToken, refreshToken]);

	return <>{loading ? <>Loading...</> : <Outlet />}</>;
};
