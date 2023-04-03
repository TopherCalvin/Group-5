//navbar
import { Avatar, Box, Center, Flex, Icon, Img } from "@chakra-ui/react";
import "./Rey NV.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import foto from "./foto.png";

export default function Navbar() {
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
				<Box className="line"></Box>
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
						<Box className="tulisan">Jordan Ong</Box>
					</Center>
					<Center>
						<Icon as={AiFillCaretDown} />
					</Center>
				</Flex>
			</Box>
		</>
	);
}
