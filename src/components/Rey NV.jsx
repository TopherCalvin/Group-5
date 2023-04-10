//navbar
import { Avatar, Box, Center, Flex, Icon, Img } from "@chakra-ui/react";
import "./Rey NV.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import foto from "./foto.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_types } from "../redux/types";

export default function Navbar() {
	const userSelector = useSelector((state) => state.auth);
	const nav = useNavigate();
	const dispatch = useDispatch();

	function Logout() {
		dispatch({ type: auth_types.logout });
		localStorage.removeItem("user");
		nav("/login");
	}

	return (
		<>
			<Box className="navbar">
				<Flex
					className="penampungarrow"
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Flex fontSize={"25px"} gap={"20px"}>
						<Icon
							as={AiOutlineLeft}
							bgColor={"#1a1616"}
							color={"#f1f0f0"}
							borderRadius={"20px"}
							padding={"0px 5px 0px 5px"}
							width={"35px"}
							height={"35px"}
						/>
						<Icon
							as={AiOutlineRight}
							bgColor={"#1a1616"}
							color={"#f1f0f0"}
							borderRadius={"20px"}
							padding={"0px 5px 0px 5px"}
							width={"35px"}
							height={"35px"}
						/>
					</Flex>
				</Flex>
				<Flex className="line"></Flex>
				<button className="button1">Upgrade</button>

				<Flex
					className="account"
					justifyContent={"space-between"}
					gap={"5px"}
					paddingX={"2px"}
				>
					<Center>
						<Avatar size={"sm"}>
							<img src={foto} />
						</Avatar>
					</Center>
					<Center>
						<Box className="tulisan">{userSelector?.name}</Box>
					</Center>
					<Center>
						<Icon
							as={AiFillCaretDown}
							onClick={Logout}
							cursor={"pointer"}
						/>
					</Center>
				</Flex>
			</Box>
		</>
	);
}
