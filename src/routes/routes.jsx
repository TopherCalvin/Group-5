import { Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import ProtectedPage from "./protectedpage";
import RegisterPage from "../pages/registerpage";

const Rute = [
	<Route
		path="/"
		element={
			<ProtectedPage needLogin={true} guestOnly={false}>
				<HomePage />
			</ProtectedPage>
		}
	/>,

	<Route
		path="/login"
		element={
			<ProtectedPage needLogin={false} guestOnly={true}>
				<LoginPage />
			</ProtectedPage>
		}
	/>,
	<Route
		path="/register"
		element={
			<ProtectedPage guestOnly={true}>
				<RegisterPage />
			</ProtectedPage>
		}
	/>,
];

export default Rute;
