import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RequireAuth } from './navigation/RequireAuth';

import { Login, SignUp, ForgotPassword, ResetPassword, Logout, Dashboard, ErrorPage } from './pages';

import { ReduxUser } from './types/Redux';

const Router = () => {
	const user = useSelector((state: ReduxUser) => state.user.value);
	const status = useSelector((state: ReduxUser) => state.user.status);
	const error = useSelector((state: ReduxUser) => state.user.error);

	return (
		<BrowserRouter>
			{status === 'loading' ? (
				<>Loading</>
			) : (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />

					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password/:aToken/:bToken" element={<ResetPassword />} />

					<Route
						path="/dashboard"
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>

					<Route path="/logout" element={<Logout />} />
					<Route path="/" element={() => <Navigate to="/login" />} />
					<Route element={<ErrorPage />} />
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default Router;
