import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="sidebar" element={<Sidebar />} />
			</Routes>
		</>
	);
}

export default App;
