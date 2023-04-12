import Sidebar from "../components/Sidebar";
import Playbar from "../components/Rey PL";
import "../components/main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Center } from "@chakra-ui/react";
import axios from "axios";

export default function HomePage() {
	let nav = useNavigate();
	const [loading, setLoading] = useState(true);
	const [playlist, setPlaylist] = useState([]);
	const [homeplaylist, SetHomePlaylist] = useState();

	async function fetchData() {
		await axios.get("http://localhost:2000/musics/").then((res) => {
			return setPlaylist(res.data);
		});
		await axios.get("http://localhost:2000/playlist").then((res) => {
			SetHomePlaylist(res.data);
		});
	}

	useEffect(() => {
		fetchData();
	}, []);

	// // DID MOUNT
	useEffect(() => {
		// FUNCTION WILL EXECUTE HERE
		// const user = JSON.parse(localStorage.getItem("user"));
		// console.log(user);
		// if (!user?.email) {
		// 	// console.log(user);
		// 	return nav("/login");
		// }
		fetchData();

		setTimeout(() => setLoading(false), 3000);
	}, []);

	return (
		<>
			{loading ? (
				<Center h={"100vh"}>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Center>
			) : (
				<>
					<Sidebar data={homeplaylist} setPlaylist={setPlaylist} />
					<Playbar key={"test"} playlist={playlist} />
				</>
			)}
		</>
	);
}
