import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage user="john" />} />
				{/* <Route path="/" element={<HomePage />} /> */}
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</>
	);
}

export default App;
