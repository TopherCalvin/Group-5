import { Route } from "react-router-dom";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";
import ProtectedPage from "./protectedpage";

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
];

export default Rute;
