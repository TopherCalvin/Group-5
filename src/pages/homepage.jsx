import Sidebar from "../components/Sidebar";
import Playbar from "../components/Rey PL";
import "../components/main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Center } from "@chakra-ui/react";

export default function HomePage(props) {
	let nav = useNavigate();
	const [loading, setLoading] = useState(true);

	// DID MOUNT
	useEffect(() => {
		// FUNCTION WILL EXECUTE HERE
		setTimeout(() => setLoading(false), 2000);
		if (props.user != "john") {
			nav("/login");
		}
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
					<Sidebar />
					<Playbar />
				</>
			)}
		</>
	);
}
