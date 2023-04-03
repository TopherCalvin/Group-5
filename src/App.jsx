import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";

function App() {
	return (
		<>
			<Routes>
				{/* <Route path="sidebar" element={<Sidebar />} /> */}
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
