import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RequireAuth } from './navigation/RequireAuth';

import {
	Account,
	Login,
	SignUp,
	ForgotPassword,
	ResetPassword,
	Logout,
	Dashboard,
	ErrorPage,
	Contacts,
	PersistLogin,
} from './pages';

import { ReduxUser } from './types/Redux';

const Router = () => {
	const status = useSelector((state: ReduxUser) => state.user.status);

	return (
		<BrowserRouter>
			{status === 'loading' ? (
				<>Loading</>
			) : (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<SignUp />} />

					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/reset-password/:aToken/:bToken"
						element={<ResetPassword />}
					/>

					<Route element={<PersistLogin />}>
						<Route
							path="/dashboard"
							element={
								<RequireAuth>
									<Dashboard />
								</RequireAuth>
							}
						/>
						<Route
							path="/dashboard/contacts"
							element={
								<RequireAuth>
									<Contacts />
								</RequireAuth>
							}
						/>
						<Route
							path="/dashboard/account"
							element={
								<RequireAuth>
									<Account />
								</RequireAuth>
							}
						/>
					</Route>

					<Route path="/logout" element={<Logout />} />
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			)}
		</BrowserRouter>
	);
};

export default Router;
