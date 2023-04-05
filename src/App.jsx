import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import Rute from "./routes/routes";

function App() {
	console.log(Rute);
	return (
		<>
			<Routes>{Rute.map((val) => val)}</Routes>
		</>
	);
}

export default App;
